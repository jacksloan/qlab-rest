import {
  joinPathFragments,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import { OpenAPIV3 as OpenAPI } from 'openapi-types';

export function codegen(
  tree: Tree,
  schema: { name: string },
  doc: OpenAPI.Document
) {
  const sourceRoot = readProjectConfiguration(tree, schema.name).root;
  const methods: string = Object.entries(doc.paths)
    .map(([path, pathObject]) => writeFetch(path, pathObject))
    .join('');
  tree.write(joinPathFragments(sourceRoot, 'api.ts'), methods);
}

function writeFetch(path: string, pathObject: OpenAPI.PathItemObject): string {
  // TODO finish implementing
  const name = path.replace('/', '').replace('{', '').replace('}', '');
  return `
export async function ${name}}(): Promise<any> {
    const res = await fetch(${path}, {
        method: ${pathObject.post ? 'post' : 'put'},
    });
    await res.json();
}

  `;
}
