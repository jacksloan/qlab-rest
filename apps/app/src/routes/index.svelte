<script lang="ts">
  import { onMount } from 'svelte';
  import { DefaultApi, Configuration } from '@jbs/codegen/src';

  const qlab = new DefaultApi(
    new Configuration({ basePath: 'http://localhost:5000/api' })
  );

  let workspaces = 'loading...';

  onMount(async () => {
    const res = await qlab.workspacesPost({
      expectResponse: true,
    });
    workspaces = JSON.stringify(res);
  });
</script>

<h1>Sir goodwin</h1>
<p>{workspaces}</p>
