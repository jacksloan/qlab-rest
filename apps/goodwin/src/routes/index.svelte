<script lang="ts">
  import type { WorkspacesCue } from '@jbs/codegen/src';
  import { onMount } from 'svelte';
  import CueGoStop from '../lib/CueGoStop.svelte';
  import { QLab } from '../lib/qlab';
  import Table, { CellRendererList } from '../lib/Table.svelte';

  let qlab: QLab;
  let columns: CellRendererList<WorkspacesCue> = [
    { key: 'name', position: 0 },
    { key: 'number', position: 1 },
    { position: 2, component: CueGoStop },
  ];

  onMount(async () => {
    qlab = new QLab(window);
    workspaceId = await qlab.getWorkspaceId();
    cueList = await qlab.getCueList(workspaceId);
  });

  async function createCue() {
    cueList = await qlab.createCue(workspaceId);
  }

  let cueList: WorkspacesCue[] = [];
  let workspaceId = 'loading...';
</script>

<div class="p-4">
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Workspace</h1>
        <p class="mt-2 text-sm text-gray-700">
          {workspaceId}
        </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          type="button"
          on:click={createCue}
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >Add Cue</button
        >
      </div>
    </div>
    <Table rows={cueList} {columns} />
  </div>
</div>
