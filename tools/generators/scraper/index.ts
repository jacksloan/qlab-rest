import { formatFiles, logger, Tree, joinPathFragments } from '@nrwl/devkit';
import { OpenAPI, OpenAPIV3 } from 'openapi-types';
import { convert } from './src/convert';
import { OscCommand } from './src/model';
import { scrapeCommands } from './src/scrape';

export default async function (tree: Tree, schema: { dir: string }) {
  const commands: OscCommand[] = await scrapeCommands();
  logger.log(`${commands.length} commands scraped from qlab osc dictionary`);
  const doc: OpenAPI.Document = convert(commands);
  tree.write(
    joinPathFragments(schema.dir || 'swagger', 'openapi.json'),
    JSON.stringify(doc)
  );
  Object.keys(doc.paths).forEach((path) => {
    tree.write(
      joinPathFragments(
        schema.dir || 'swagger',
        'responses',
        `${path.replace(/\+/g, 'plus').replace(/\-/g, 'minus')}.json`
      ),
      JSON.stringify(<OpenAPIV3.NonArraySchemaObject>{
        type: 'object',
        properties: {},
        nullable: true,
        description: `response body for ${path}`,
      })
    );
  });
  // codegen(tree, schema, doc);
  await formatFiles(tree);
  // return () => installPackagesTask(tree);
  return () => {};
}
