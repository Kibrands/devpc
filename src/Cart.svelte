<script>
  import { Link } from "svelte-routing";
  import { onMount, getContext } from "svelte";
  import { cartData, logged } from "./store.js";

  import Button from "./Button.svelte";

  const URL = getContext("URL");
  let cart = {};
  let search = "";
  let category = "";

  onMount(async () => {
    const response = await fetch(URL.purchases);
    const data = await response.json();
    $cartData = data;
  });

</script>