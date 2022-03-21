import {
  formatFiles,
  installPackagesTask,
  joinPathFragments,
  logger,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { OpenAPI } from 'openapi-types';
import { codegen } from './src/codegen';
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
  delete doc.paths['/cue/{cue_number}sliceMarkers'];
  const fileName = schema.filename || 'openapi.json';
  const sourceRoot = readProjectConfiguration(tree, schema.name).root;
  tree.write(joinPathFragments(sourceRoot, fileName), JSON.stringify(doc));
  codegen(tree, schema, doc);
  await formatFiles(tree);
  return () => installPackagesTask(tree);
}
