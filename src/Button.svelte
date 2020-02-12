<script>
  import { onMount, getContext } from "svelte";
  import { jsonData } from "./store.js";

  export let type = "addToCart";
  export let collection = "products";
  export let document = {};

  let handler = () => {};
  let classes = "";
  let url = "";

  const URL = getContext("URL");
  onMount(() => {
    switch (type) {
      case "addToCart":
        handler = addToCart;
        classes = "btn btn-dark btn-addToCart";
        break;
      default:
    }
    switch (collection) {
      case "products":
        url = URL.products;
        break;
      case "users":
        url = URL.users;
        break;
      case "carts":
        url = URL.carts;
        break;
      case "purchases":
        url = URL.purchases;
        break;
      default:
    }
  });

  function addToCart() {
    console.log(document);
  }
</script>

<style>
.btn-addToCart::after {
    content: " Añadir al carrito";
  }
</style>

<button class={classes} on:click={handler} />