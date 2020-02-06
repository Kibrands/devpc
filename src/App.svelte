<script>
  import Footer from "./Footer.svelte";
  export let name;
</script>

<style>
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <Footer></Footer>
</main>
