<script lang="ts">
  import { onMount } from 'svelte';
  import { DefaultApi, Configuration } from '@jbs/codegen/src';
  import { each } from 'svelte/internal';

  const qlab = new DefaultApi(
    new Configuration({ basePath: 'http://localhost:5000/api' })
  );

  let workspaces = 'loading...';
  let cueList: { data: any[] } = { data: [] };

  onMount(async () => {
    const res = await qlab.workspacesPost({
      expectResponse: true,
    });
    workspaces = JSON.stringify(res);

    cueList = (await qlab.workspaceIdCueListsPost({
      id: 'D3523FFE-5779-486C-9088-611C246D8ED9',
      expectResponse: true,
    })) as any;
  });

  const goCue1 = () => {
    qlab.cueCueNumberGoPost({
      cueNumber: '1',
    });
  };
</script>

<h1>Sir goodwin</h1>
<p>Workspace = {workspaces}</p>
<br />
<ul>
  {#each cueList.data as c}
    <li>{JSON.stringify(c)}</li>
  {/each}
</ul>

<button class="px-4 py-1 bg-green-500 text-white shadow-md rounded-md" on:click={goCue1}>GO</button>
