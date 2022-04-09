<script lang="ts" context="module">
  export type CellRenderer<T> = {
    key?: keyof T;
    position: number;
    header?: string;
    component?: typeof SvelteComponent;
  };
  export type CellRendererList<T> = CellRenderer<T>[];
  export type CellData<T> = {
    data: T;
    index: number;
  };
</script>

<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  export let columns: CellRendererList<unknown> = [];
  export let rows: unknown[] = [];

  $: _sortedColumns = columns.sort((a, b) => a.position - b.position);
  $: headers = _sortedColumns.map((c) => c.header || c.key || 'Unknown');
</script>

<div
  class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
>
  <table class="min-w-full divide-y divide-gray-300">
    <thead class="bg-gray-50">
      <tr>
        {#each headers as header}
          <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            {header}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 bg-white">
      {#each rows as data, index}
        <tr>
          {#each _sortedColumns as col}
            <td class="px-3 py-4 text-sm text-gray-900">
              {#if col.component}
                <svelte:component
                  this={col.component}
                  props={{ data, index }}
                />
              {:else}
                {data[col.key]}
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
