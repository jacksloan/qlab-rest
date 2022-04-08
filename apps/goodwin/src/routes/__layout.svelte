<script>
  import '../app.css';
  let menuOpen = false;
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<nav class="w-full shadow-md h-12 flex flex-row items-center gap-2">
  <button
    on:click={toggleMenu}
    type="button"
    class="inline-flex items-center justify-center p-2 rounded-md text-indigo-600 hover:text-indigo-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    aria-controls="mobile-menu"
    aria-expanded="false"
  >
    <span class="sr-only">Open main menu</span>

    {#if !menuOpen}
      <svg
        class="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    {/if}

    {#if menuOpen}
      <svg
        class="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    {/if}
  </button>
  <h1 class="text-lg font-semibold text-indigo-600"><a href="/">Goodwin</a></h1>
</nav>
<slot />
