<script>
  import { setContext } from "svelte";
  import { Router } from "svelte-routing";
  import { writable } from "svelte/store";
  import Content from "./Content.svelte";
  import Nav from "./Nav.svelte";

  const URL = {
    users: "https://devpc.herokuapp.com/api/users/",
    products: "https://devpc.herokuapp.com/api/products/",
    carts: "https://devpc.herokuapp.com/api/carts/",
    purchases: "https://devpc.herokuapp.com/api/purchases/"
  };

  setContext("URL", URL);
</script>

<style>
  :global(.inversed) {
    filter: brightness(0) invert(1);
  }
</style>

<Router>
  <Nav />
  <Content />
</Router>
