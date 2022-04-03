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
          const isDictionaryEntry = (section[0] as any).name === 'h4';
          if (isDictionaryEntry) {
            const getElements = (selector: string) =>
              section
                .filter(selector)
                .map(function () {
                  return $(this).text();
                })
                .toArray();
            const h4 = getElements('h4')[0] as any as string;
            const pathElements = h4.trim().split(' ');
            const [path, ...rest] = pathElements;

            // skip bad dictionary entries
            if (path ==='/cue/{cue_number}sliceMarkers') {
              logger.info('skipping duplicate path /cue/{cue_number}sliceMarkers')
              return false
            }
            const pathVariables = new Path(fixStringForPath(path)).params;

            const commandArguments =
              rest.length < 1
                ? []
                : new Path(`/${fixStringForPath(rest.join('/'))}`).params;

            const description = getElements(':not(h4)').join(' ');
            return <OscCommand>{
              path,
              pathVariables,
              commandArguments,
              description,
            };
          } else {
            // not a dictionary entry... skip
            return false;
          }
        })
        .toArray()
        .filter(Boolean) as any as OscCommand[];

      return commands;
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
