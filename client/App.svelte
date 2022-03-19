<script lang="ts">
  import * as annyang from "annyang";
  import type { Annyang } from "annyang";
  import { Configuration, DefaultApi } from "./generated";
  import { onMount } from "svelte";

  const basePath = "http://localhost:5000/api";
  const apiConfig = new Configuration({ basePath });
  const qlab = new DefaultApi(apiConfig);

  function listen() {
    const speech: Annyang = annyang as any;
    const start = () => qlab.cueCueNumberGoPut({ cueNumber: "1" });
    speech.addCommands({ start });
    speech.addCallback("result", (event) => console.log(event)), speech.start();
  }

  async function fetchCueList(id): Promise<any> {
    const cues = await qlab.workspaceIdCueListsPost({ id });
    console.log({ cues });
    return cues;
  }

  async function fetchWorkspaceId(): Promise<string> {
    const response = await qlab.workspacesPost();
    return (response as any).data[0]?.uniqueID || "unknown";
  }

  onMount(async () => {
    workspaceId = await fetchWorkspaceId();
    cueList = await fetchCueList(workspaceId);
  });

  let cueList;
  let workspaceId;
</script>

<h1>Welcome to sir goodwin</h1>
<p>Workspace ID = {workspaceId}</p>
<hr />
{JSON.stringify(cueList)}
