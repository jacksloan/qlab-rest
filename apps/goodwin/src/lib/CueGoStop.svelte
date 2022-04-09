<script lang="ts">
  import type { WorkspacesCue } from 'codegen/src';
  import { onMount } from 'svelte';
  import { QLab } from './qlab';
  import type { CellData } from './Table.svelte';
  export let props: CellData<WorkspacesCue>;
  let qlab: QLab;
  onMount(() => (qlab = new QLab(window)));
</script>

<div class="flex flex-row gap-6">
  <button
    on:click={() => qlab.go(props.data.number)}
    class="bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg transition-all duration-100 flex flex-row justify-center items-center w-14 h-14 px-2 py-2 rounded-md"
    >GO</button
  >
  <button
    on:click={() => qlab.stop(props.data.number)}
    class="bg-red-600 hover:bg-red-700 shadow-md hover:shadow-lg transition-all duration-100 flex flex-row justify-center items-center w-14 h-14 px-2 py-2 rounded-md"
    >STOP</button
  >
</div>
