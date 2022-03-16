<script lang="ts">
  export let name: string;
  let response: string = "loading...";

  fetch("http://localhost:8050").then(async (res) => {
    const text = await res.text();
    response = text;
    console.log({ text });
  });
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Response = {response}
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
