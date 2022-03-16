<script lang="ts">
  import * as annyang from "annyang";
  import type { Annyang } from "annyang";

  let cueNumber = 1;

  function listen() {
    const speech: Annyang = annyang as any;
    speech.addCommands({
      start: () => {
        fetch("/api/osc", {
          method: "POST",
          body: JSON.stringify({
            address: `/cue/${cueNumber}/go`,
            arguments: null,
          }),
        });
      },
      stop: () => {
        fetch("/api/osc", {
          method: "POST",
          body: JSON.stringify({
            address: `/cue/${cueNumber}/stop`,
            arguments: null,
          }),
        });
      },
    });
    speech.addCallback("result", (event) => {
      console.log(event);
    });
    speech.start();
  }
</script>

<button on:click={listen}>Start Listening</button>

<label for="cueNumber">Cue #</label>
<input id="cueNumber" type="text" bind:value={cueNumber} />
