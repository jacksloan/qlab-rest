<script lang="ts">
  import { onMount } from 'svelte';

  async function getWorkspaces() {
    const res = await fetch('http://localhost:5000/api/workspaces', {
      method: 'post',
    });
    workspaces = await res.text();
  }

  let workspaces = 'loading...';

  onMount(() => {
    getWorkspaces();
  });
</script>

<h1>Sir goodwin</h1>
<p>{workspaces}</p>
