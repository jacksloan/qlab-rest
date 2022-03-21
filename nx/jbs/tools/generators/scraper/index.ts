import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { OpenAPI } from 'openapi-types';
import { convert } from './src/convert';
import { OscCommand } from './src/model';
import { scrapeCommands } from './src/scrape';

export default async function (
  tree: Tree,
  schema: { name: string; specFileName: string }
) {
  await libraryGenerator(tree, { name: schema.name });
  const commands: OscCommand[] = await scrapeCommands();
  const doc: OpenAPI.Document = convert(commands);
  const fileName = schema.specFileName || 'spec.json';
  tree.write(fileName, JSON.stringify(doc));
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
