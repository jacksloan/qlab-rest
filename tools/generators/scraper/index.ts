import { formatFiles, logger, Tree, joinPathFragments } from '@nrwl/devkit';
import { OpenAPI, OpenAPIV3 } from 'openapi-types';
import { convert } from './src/convert';
import { OscCommand } from './src/model';
import { ScraperSchema } from './src/schema.type';
import { scrapeCommands } from './src/scrape';
import { writeSwaggerJson } from './src/write';

export default async function (tree: Tree, schema: ScraperSchema) {
  const commands: OscCommand[] = await scrapeCommands();
  logger.log(`${commands.length} commands scraped from qlab osc dictionary`);
  const doc: OpenAPI.Document = convert(commands);
  writeSwaggerJson(tree, doc, schema);
  await formatFiles(tree);
  return () => {};
}
