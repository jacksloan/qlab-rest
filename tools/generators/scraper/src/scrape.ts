import { Path } from 'path-parser';
import { logger } from '@nrwl/devkit';
import { OscCommand } from './model';
import cheerio from 'cheerio';
import axios from 'axios';

export async function scrapeCommands(
  url: string = 'https://qlab.app/docs/v4/scripting/osc-dictionary-v4/'
): Promise<OscCommand[]> {
  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      const html = response.data;

      const $ = cheerio.load(html);

      const commands = $('hr')
        .map(function (i) {
          const section = $(this).nextUntil('hr');
          const description = section
            .map(function () {
              return $(this).text();
            })
            .toArray()
            .join('\n');
          const isDictionaryEntry =
            (section[0] as any).name === 'h4' ||
            section.filter('#application-methods').length > 0;

          if (isDictionaryEntry) {
            const getElements = (selector: string) =>
              section
                .filter(selector)
                .map(function () {
                  return $(this).text();
                })
                .toArray();
            const h4s = getElements('h4') as any as string[];

            // skip duplicate dictionary entries
            if (
              [
                '/cue/{cue_number}sliceMarkers',
                '/cue/{cue_number}/gang inChannel outChannel',
                '/cue/{cue_number}/level inChannel outChannel',
              ].filter((it) => h4s[0].includes(it)).length > 0
            ) {
              console.log('skipping');
              return [];
            }

            return h4s.map((h4) => {
              const pathElements = h4.trim().split(' ');
              let [path, ...rest] = pathElements;

              // cannot have duplicate path variables
              if (path === '/workspace/{id}/select_id/{id}') {
                path = '/workspace/{id}/select_id/{selectId}';
              }

              const pathVariables = new Path(fixStringForPath(path)).params;

              const commandArguments =
                rest.length < 1
                  ? []
                  : new Path(`/${fixStringForPath(rest.join('/'))}`).params;

              return <OscCommand>{
                path,
                pathVariables,
                commandArguments,
                description,
              };
            });
          } else {
            // not a dictionary entry... skip
            return [];
          }
        })
        .toArray()
        .filter(Boolean) as any as OscCommand[][];

      return commands.flat();
    }
  } catch (error) {
    console.log(error);
  }
}

function fixStringForPath(string: string) {
  return string
    .replace(/{/g, ':')
    .replace(/}/g, '')
    .replace(/\+/g, 'plus')
    .replace(/\-/g, 'minus');
}
