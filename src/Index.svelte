<script>
  import { Link } from "svelte-routing";
  import { onMount, getContext } from "svelte";
  import { jsonData, logged, category } from "./store.js";

  import Search from "./Search.svelte";
  import Product from "./Product.svelte";
  import Button from "./Button.svelte";

  const URL = getContext("URL");
  let search = "";
  let product = {};

  // TODO -> Al pulsar la opción del sidebar, debe coger la categoría
  let findUrl = $category == "" ? "" : "category/" + $category;

  onMount(async () => {
    const response = await fetch(URL.products + findUrl);
    const data = await response.json();
    $jsonData = data;
  });

  $: regex = new RegExp(search, "i");
  $: dataResponse = search
    ? $jsonData.filter(item => regex.test(item.title))
    : $jsonData;
</script>

<style>
  .breadcrumb {
    border-radius: 0;
  }
</style>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">
      <i class="fas fa-home" />
      Inicio
    </li>
  </ol>
</nav>

<div class="container">
  <Search bind:search />

  <div class="row">
    {#each dataResponse as product}
      <Product {product}>
        <div style="text-align: right">
          {#if $logged}
            <Button document={product} type="addToCart" collection="products" />
          {/if}
          {#if !$logged}
            <button
              class="btn btn-dark"
              data-toggle="modal"
              data-target="#myModal">
              Añadir al carrito
            </button>
          {/if}
        </div>
      </Product>
    {/each}
  </div>
</div>
