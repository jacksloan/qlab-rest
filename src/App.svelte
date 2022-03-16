<script lang="ts">
  import * as annyang from "annyang";
  import type { Annyang } from "annyang";

  function listen() {
    const speech: Annyang = annyang as any;
    speech.addCommands({
      hello: () => {
        fetch("/api/osc", {
          method: "POST",
          body: JSON.stringify({
            address: "/cue/1/go",
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
<p>Hello World</p>
