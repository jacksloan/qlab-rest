<script lang="ts">
  import * as annyang from "annyang";
  import type { Annyang } from "annyang";

  let cueNumber = 1;
  let path = "/api/osc/cue/1/go";

  function listen() {
    const speech: Annyang = annyang as any;
    const start = () => post(`/api/osc/cue/${cueNumber}/go`);
    const stop = () => post(`/api/osc/cue/${cueNumber}/stop`);
    speech.addCommands({ start, stop });
    speech.addCallback("result", (event) => console.log(event)), speech.start();
  }

  async function post(path: string, args?: any): Promise<any> {
    const method = "POST";
    const body = JSON.stringify({ arguments: args });
    return fetch(path, { method, body });
  }
</script>

<button on:click={listen}>Start Listening</button>

<label for="cueNumber">Cue #</label>
<input id="cueNumber" type="text" bind:value={cueNumber} />

<hr />
<label for="post">Cue #</label>
<input id="post" type="text" bind:value={path} />
<button on:click={() => post(path)}>Post</button>
