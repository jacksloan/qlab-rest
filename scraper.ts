import axios from "axios";
import cheerio from "cheerio";
import fs from "fs";
import yaml from "yaml";
import type { OpenAPIV3 as OpenAPI } from "openapi-types";

interface OscCommand {
  path: string;
  pathVariables: string[];
  args: string[];
  description: string;
}

axios.get("https://qlab.app/docs/v4/scripting/osc-dictionary-v4/").then(
  (response) => {
    if (response.status === 200) {
      const html = response.data;

      const $ = cheerio.load(html);

      const oscDictionary = $("hr")
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
            const path = getElements("h4");
            const description = getElements(":not(h4)").join(" ");
            return { path, description };
          }
        })
        .filter(Boolean)
        .toArray() as any as OscCommand[];

      const document = convert(oscDictionary);

      writeFile(document);
    }
  },
  (error) => console.log(error)
);

function convert(qlab: OscCommand[]): OpenAPI.Document {
  const paths = qlab.reduce((acc, curr) => {
    const { description } = curr;
    const method = description.toLocaleLowerCase().includes("return")
      ? "post"
      : "put";
    return {
      ...acc,
      [curr.path]: <OpenAPI.PathItemObject>{
        [method]: <OpenAPI.OperationObject>{
          description,
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
      title: "",
      version: "1.0",
    },
    paths,
    components: {},
  };
}

function writeFile(document: OpenAPI.Document): void {
  const doc = new yaml.Document();
  doc.contents = document;
  fs.writeFileSync("openapi: '3.0.2'.yml", doc.toString());
}
