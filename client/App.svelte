<script lang="ts">
  import * as annyang from "annyang";
  import type { Annyang } from "annyang";
  import { Configuration, DefaultApi } from "./generated";

  const basePath = "http://localhost:5000/api";
  const apiConfig = new Configuration({ basePath });
  const qlab = new DefaultApi(apiConfig);

  function listen() {
    const speech: Annyang = annyang as any;
    const start = () => qlab.cueCueNumberGoPut({ cueNumber: "1" });
    const stop = () => qlab.cueCueNumberStopPut({ cueNumber: "1" });
    speech.addCommands({ start, stop });
    speech.addCallback("result", (event) => console.log(event)), speech.start();
  }

  let cueNumber = "1";
</script>

<button on:click={listen}>Start Listening</button>

<hr />
<label for="cue">Cue #</label>
<input id="cue" type="text" bind:value={cueNumber} />
<button on:click={() => qlab.cueCueNumberGoPut({ cueNumber })}>Start</button>
<button on:click={() => qlab.cueCueNumberStopPut({ cueNumber })}>Stop</button>

