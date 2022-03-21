import {
  logger,
  formatFiles,
  installPackagesTask,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { OpenAPI } from 'openapi-types';
import * as path from 'path';
import { convert } from './src/convert';
import { OscCommand } from './src/model';
import { scrapeCommands } from './src/scrape';

export default async function (
  tree: Tree,
  schema: { name: string; filename?: string }
) {
  await libraryGenerator(tree, { name: schema.name });
  logger.log({ schema });
  const commands: OscCommand[] = await scrapeCommands();
  logger.log(`${commands.length} commands scraped from qlab osc dictionary`);
  const doc: OpenAPI.Document = convert(commands);
  const fileName = schema.filename || 'openapi.json';
  const sourceRoot = readProjectConfiguration(tree, schema.name).root;
  tree.write(path.join(sourceRoot, fileName), JSON.stringify(doc));

  await formatFiles(tree);
  return () => installPackagesTask(tree);
}
