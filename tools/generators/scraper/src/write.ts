import { joinPathFragments, Tree } from '@nrwl/devkit';
import _ from 'lodash';
import { OpenAPIV3 as OpenAPI } from 'openapi-types';
import { ScraperSchema } from './schema.type';

export function writeSwaggerJson(
  tree: Tree,
  doc: OpenAPI.Document,
  schema: ScraperSchema
) {
  if (schema.flatDir) {
    tree.write(
      joinPathFragments(schema.flatDir, 'openapi.json'),
      JSON.stringify(doc)
    );
  }

  // write each component schema to individual files
  Object.entries(doc.components.schemas)
    .filter(not(startsWith('_')))
    .forEach(([modelName, modelValue]) => {
      tree.write(
        joinPathFragments(schema.dir, getModelPath(modelName)),
        JSON.stringify(modelValue)
      );
    });

  // given a standalone swagger document,
  // split all the #/components/schemas
  // into separate files and $refs
  tree.write(
    joinPathFragments(schema.dir, 'openapi.json'),
    JSON.stringify(replaceComponentsWith$RefPaths(doc))
  );
}

function startsWith(s: string): (s: string) => boolean {
  return (val: string) => (val?.[0] || '') === s;
}

function not(fn: (v: any) => boolean): (v: any) => any {
  return (v) => !fn(v);
}

function replaceComponentsWith$RefPaths(
  doc: OpenAPI.Document
): OpenAPI.Document {
  return {
    ...doc,
    components: {
      schemas: {
        ...Object.entries(doc.components.schemas)
          .filter(([key]) => startsWith('_')(key))
          .reduce((a, [k, v]) => ({ ...a, [k]: v }), {}),
        ...Object.keys(doc.components.schemas)
          .filter(not(startsWith('_')))
          .reduce((acc, curr) => {
            return {
              ...acc,
              [curr]: <OpenAPI.ReferenceObject>{
                $ref: getModelPath(curr),
              },
            };
          }, {}),
      },
    },
  };
}

function getModelPath(name: string): string {
  return joinPathFragments('components', `${name}.json`);
}
