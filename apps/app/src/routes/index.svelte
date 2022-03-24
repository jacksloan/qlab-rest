<script lang="ts">
  import { onMount } from 'svelte';
  import { DefaultApi, Configuration } from '@jbs/codegen/src';

  const qlab = new DefaultApi(
    new Configuration({ basePath: 'http://localhost:5000/api' })
  );

  async function getWorkspaces() {
    const res = await qlab.workspacesPost();
    workspaces = JSON.stringify(res);
  }

  let workspaces = 'loading...';

  onMount(() => {
    getWorkspaces();
  });
</script>

<h1>Sir goodwin</h1>
<p>{workspaces}</p>
