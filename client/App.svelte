<script lang="ts">
  import * as annyang from "annyang";
  import type { Annyang } from "annyang";

  let cueNumber = 1;
  let path = "/api/workspaces";

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
  async function get(path: string, args?: any): Promise<any> {
    return fetch(path, { method: "GET" });
  }
</script>

<button on:click={listen}>Start Listening</button>

<label for="cueNumber">Cue #</label>
<input id="cueNumber" type="text" bind:value={cueNumber} />

<hr />
<label for="get">Cue #</label>
<input id="get" type="text" bind:value={path} />
<button on:click={() => get(path)}>Fetch</button>
