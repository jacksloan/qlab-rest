<script lang="ts">
  import { Configuration, DefaultApi } from '@jbs/codegen/src';
  import * as numberConverter from 'number-to-words';

  import _ from 'lodash';
  import { doubleMetaphone } from 'double-metaphone';
  import { onMount } from 'svelte';

  let commands: { [k: string]: () => Promise<any> } = {
    'loading...': async () => {},
  };

  $: commandNames = Object.keys(commands);

  function metaphone(s: string): string {
    return doubleMetaphone(s)[0];
  }

  onMount(async () => {
    const isDev = import.meta.env.MODE === 'development';
    const port = isDev ? 5000 : window.location.port;
    const basePath = `http://${window.location.hostname}:${port}/api`;
    const api = new DefaultApi(new Configuration({ basePath }));
    const recognition = await import('annyang');
    const go = (n: number) => () => api.cueCueNumberGo({ cueNumber: `${n}` });
    const stop = (n: number) => () =>
      api.cueCueNumberStop({ cueNumber: `${n}` });
    commands = {
      // go
      'show me some puppies': go(1),
      'show me more cute puppies': go(2),
      'okay just one more': go(3),
    };

    const phoneticCommands: { [k: string]: () => Promise<any> } =
      Object.entries(commands).reduce((acc, [name, fn]) => {
        const cmd = name.split(' ').map(metaphone).join(' ');
        return {
          ...acc,
          [cmd]: fn,
        };
      }, {});
      
      // console.debug({ phoneticCommands });
    // recognition JSGF grammars are ignored
    // use metaphone to fuzzy match commands
    recognition.addCallback('result', async (results: string[]) => {
      const actions = results
        .map((s) => s.trim())
        .map((result) => {
          const fuzzyResult = result
            .split(' ')
            .map(maybeConvertNumber)
            .map(metaphone)
            .join(' ');
          // console.debug({ fuzzyResult });
          return fuzzyResult;
        })
        .map((fuzzyResult) => phoneticCommands[fuzzyResult])
        .filter(_.isFunction);

      if (actions.length > 0) {
        await actions[0]();
      }
    });
    recognition.start();
  });

  function maybeConvertNumber(s: string): string {
    try {
      const n = parseInt(s);
      return numberConverter.toWords(n);
    } catch (e) {
      return s;
    }
  }
</script>

<div class="prose px-4 mt-6 md:px-0 container mx-auto">
  <h1>Speech-to-text Demo</h1>
  <p>Use voice commands to control workspace cues</p>

  <h2>Example commands</h2>
  <ul>
    {#each commandNames as cmd}
      <li>"{cmd}"</li>
    {/each}
  </ul>
</div>
