<script lang="ts">
  import { Configuration, CueListsCues, DefaultApi } from '@jbs/codegen/src';
  import { onMount } from 'svelte';

  const qlab = new DefaultApi(
    new Configuration({ basePath: 'http://localhost:5000/api' })
  );

  let cueList: CueListsCues[] = [];

  let workspaceId = 'loading...';

  onMount(async () => {
    const w = await qlab.workspacesPost({
      expectResponse: true,
    });
    workspaceId = w?.data?.[0]?.uniqueID;

    const list = await qlab.workspaceIdCueListsPost({
      id: workspaceId,
      expectResponse: true,
    });
    cueList = list.data[0].cues;
  });

  async function go(cueNumber: string) {
    await qlab.cueCueNumberGoPost({
      cueNumber: `${cueNumber}`,
    });
  }

  async function createCue() {
    await qlab.workspaceIdNewPost({
      id: workspaceId,
      inlineObject23: {
        cueType: 'text'
      }
    });
  }

  async function stop(cueNumber: string) {
    await qlab.cueCueNumberStopPost({
      cueNumber: `${cueNumber}`,
    });
  }
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold">Workspace: {workspaceId}</h1>
  <button
    on:click={createCue}
    class="bg-blue-500 p-2 shadow-md rounded-md text-white">Add Cue</button
  >
  <table>
    <thead>
      <tr>
        <td class="px-2">Name</td>
        <td class="px-2">Number</td>
        <td class="px-2">Go</td>
        <td class="px-2">Stop</td>
      </tr>
    </thead>
    <tbody>
      {#each cueList as cue}
        <tr>
          <td class="px-2">{cue.name}</td>
          <td class="px-2">{cue.number}</td>
          <td class="px-2"
            ><button
              class="bg-green-500 py-1 px-2 rounded-md text-white shadow-md"
              on:click={() => go(cue.number)}>GO</button
            ></td
          >
          <td class="px-2"
            ><button
              class="bg-red-500 py-1 px-2 rounded-md text-white shadow-md"
              on:click={() => stop(cue.number)}>STOP</button
            ></td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</div>
