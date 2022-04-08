<script lang="ts">
  import { Configuration, DefaultApi, WorkspacesCue } from '@jbs/codegen/src';
  import { onMount } from 'svelte';
  let VITE_MODE = import.meta.env.MODE;

  let qlab: DefaultApi;

  async function getCueList(): Promise<WorkspacesCue[]> {
    const list = await qlab.workspaceIdCueLists({
      id: workspaceId,
      expectResponse: true,
    });
    return list.data[0].cues;
  }

  async function getWorkspaceId(): Promise<string> {
    const w = await qlab.workspaces({
      expectResponse: true,
    });
    return w?.data?.[0]?.uniqueID;
  }

  async function go(cueNumber: string) {
    await qlab.cueCueNumberGo({
      cueNumber: `${cueNumber}`,
    });
  }

  async function createCue() {
    await qlab.workspaceIdNew({
      id: workspaceId,
      workspaceIdNewRequest: {
        cueType: 'text',
      },
    });
    cueList = await getCueList();
  }

  async function stop(cueNumber: string) {
    await qlab.cueCueNumberStop({
      cueNumber: `${cueNumber}`,
    });
  }

  onMount(async () => {
    const port =
      (VITE_MODE || '') === 'development' ? 5000 : window.location.port;
    qlab = new DefaultApi(
      new Configuration({
        basePath: `http://${window.location.hostname}:${port}/api`,
      })
    );
    workspaceId = await getWorkspaceId();
    cueList = await getCueList();
  });

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
    <div
      class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
    >
      <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >Name</th
            >
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >Number</th
            >
            <th
              scope="col"
              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >Actions</th
            >
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          {#each cueList as c}
            <tr>
              <td
                class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6"
              >
                {c.name}
                <dl class="font-normal lg:hidden">
                  <dt class="sr-only">Number</dt>
                  <dd class="mt-1 truncate text-gray-700">
                    {c.number}
                  </dd>
                </dl>
              </td>
              <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"
                >{c.number}</td
              >
              <td class="px-3 py-4 text-md text-white">
                <div class="flex flex-row gap-6">
                  <button
                    on:click={() => go(c.number)}
                    class="bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg transition-all duration-100 flex flex-row justify-center items-center w-14 h-14 px-2 py-2 rounded-md"
                    >GO</button
                  >
                  <button
                    on:click={() => stop(c.number)}
                    class="bg-red-600 hover:bg-red-700 shadow-md hover:shadow-lg transition-all duration-100 flex flex-row justify-center items-center w-14 h-14 px-2 py-2 rounded-md"
                    >STOP</button
                  >
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
