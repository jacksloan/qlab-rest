import axios from "axios";
import cheerio from "cheerio";
import fs from "fs";
import yaml from "yaml";
import type { OpenAPIV3 as OpenAPI } from "openapi-types";
import { Path } from "path-parser";
import path from "path";

// ## main
//
// scrape osc dictionary methods from the qlab website and do
// our best to translate them into a reasonable OpenAPI Spec File
(async () => {
  const commands: OscCommand[] = await scrapeOscCommands();
  const doc: OpenAPI.Document = convert(commands);
  const filename = "spec.yaml";
  write(doc, filename);
  console.log("openapi spec file created: ");
  console.log(path.join(__dirname, filename));
})();

interface OscCommand {
  path: string;
  pathVariables: string[];
  commandArguments: string[];
  description: string;
}

async function scrapeOscCommands(): Promise<OscCommand[]> {
  try {
    const response = await axios.get(
      "https://qlab.app/docs/v4/scripting/osc-dictionary-v4/"
    );

    if (response.status === 200) {
      const html = response.data;

      const $ = cheerio.load(html);

      return $("hr")
        .map(function (i) {
          const section = $(this).nextUntil("hr");
          const isDictionaryEntry = (section[0] as any).name === "h4";
          if (isDictionaryEntry) {
            const getElements = (selector: string) =>
              section
                .filter(selector)
                .map(function () {
                  return $(this).text();
                })
                .toArray();
            const pathElements = (getElements("h4")[0] as any as string)
              .replace(/{/g, ":") // {var} => :var
              .replace(/}/g, "")
              .replace(/\+/g, "plus") // temp path-parser substitution
              .replace(/\-/g, "minus") // temp path-parser substitution
              .trim()
              .split(" ");
            let [path, ...rest] = pathElements;
            const pathVariables = new Path(path).params;

            // revert temp substitutions
            path = path.replace(/plus/g, "+").replace(/minus/g, "-");

            const commandArguments =
              rest.length < 1 ? [] : new Path(`/${rest.join("/")}`).params;

            const description = getElements(":not(h4)").join(" ");
            return <OscCommand>{
              path,
              pathVariables,
              commandArguments,
              description,
            };
          }
        })
        .filter(Boolean)
        .toArray() as any as OscCommand[];
    }
  } catch (error) {
    console.log(error);
  }
}

function convert(qlab: OscCommand[]): OpenAPI.Document {
  const paths = qlab.reduce((acc, curr) => {
    const { path, description, commandArguments, pathVariables } = curr;
    const method = description.toLocaleLowerCase().includes("return")
      ? "post"
      : "put";

    const maybeRequestBody =
      (commandArguments || []).length < 1
        ? {}
        : {
            requestBody: <OpenAPI.RequestBodyObject>{
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: commandArguments.reduce(
                      (props, prop) => ({
                        ...props,
                        [prop]: <OpenAPI.SchemaObject>{
                          type: "string",
                        },
                      }),
                      {}
                    ),
                  },
                },
              },
            },
          };

    return {
      ...acc,
      [path]: <OpenAPI.PathItemObject>{
        [method]: <OpenAPI.OperationObject>{
          description,
          parameters: pathVariables.map(
            (name) =>
              <OpenAPI.ParameterObject>{
                in: "path",
                name,
                required: true,
                schema: { type: "string" },
              }
          ),
          ...maybeRequestBody,
          responses: {
            200: {
              description: "ok",
            },
          },
        },
      },
    };
  }, {});

  return {
    openapi: "3.0.2",
    info: {
      title: "QLab OSC Rest Proxy",
      version: "1.0",
    },
    paths,
  };
}

function write(
  document: OpenAPI.Document,
  filename = "openapi: '3.0.2'.yml"
): void {
  const doc = new yaml.Document();
  doc.contents = document;
  fs.writeFileSync(filename, doc.toString());
}
