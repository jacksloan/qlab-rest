import axios from "axios";
import cheerio from "cheerio";
import fs from "fs";
import type { OpenAPIV3 as OpenAPI } from "openapi-types";
import path from "path";
import { Path } from "path-parser";

// ## main
//
// scrape osc dictionary methods from the qlab website and do
// our best to translate them into a reasonable OpenAPI Spec File
//
// json file is output to the dist directory
// (async () => {
//   const commands: OscCommand[] = await scrapeOscCommands();
//   const doc: OpenAPI.Document = convert(commands);
//   const fileName = "spec.json";
//   const filePath = write(doc, fileName);
//   console.log("openapi spec file created: ");
//   console.log(filePath);
// })();

export interface OscCommand {
  path: string;
  pathVariables: string[];
  commandArguments: string[];
  description: string;
}

export async function scrapeOscCommands(): Promise<OscCommand[]> {
  try {
    const response = await axios.get(
      "https://qlab.app/docs/v4/scripting/osc-dictionary-v4/"
    );

    if (response.status === 200) {
      const html = response.data;

      const $ = cheerio.load(html);

      const commands = $("hr")
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
            const h4 = getElements("h4")[0] as any as string;
            const pathElements = h4.trim().split(" ");
            const [path, ...rest] = pathElements;
            const pathVariables = new Path(fixStringForPath(path)).params;

            const commandArguments =
              rest.length < 1
                ? []
                : new Path(`/${fixStringForPath(rest.join("/"))}`).params;

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

      console.log(`${commands.length} commands scraped from qlab osc dictionary`);
      return commands;
    }
  } catch (error) {
    console.log(error);
  }
}

export function convert(qlab: OscCommand[]): OpenAPI.Document {
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
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                  },
                },
              },
            },
          },
        },
      },
    };
  }, {});

  return {
    openapi: "3.0.2",
    servers: [{ url: "/api" }],
    info: {
      title: "QLab OSC Rest Proxy",
      version: "1.0",
    },
    paths,
  };
}

function write(document: OpenAPI.Document, fileName: string): string {
  const filePath = path.join(__dirname, "dist", fileName);
  fs.writeFileSync(filePath, JSON.stringify(document));
  return filePath;
}

function fixStringForPath(string: string) {
  return string
    .replace(/{/g, ":")
    .replace(/}/g, "")
    .replace(/\+/g, "plus")
    .replace(/\-/g, "minus");
}
