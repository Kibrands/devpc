<script>
  import Search from "./Search.svelte";
  import Product from "./Product.svelte";
  import Button from "./Button.svelte";
  import ProductsNav from "./ProductsNav.svelte";
  import Modal from "svelte-simple-modal";
  import { Link } from "svelte-routing";
  import { jsonData, logged } from "./store.js";
  import { onMount, getContext } from "svelte";

  let search = "";

  const URL = getContext("URL");
  let product = {};
  let category = findGetParameter("cat");

  $: regex = new RegExp(search, "i");
  $: dataResponse = search
    ? $jsonData.filter(item => regex.test(item.title))
    : $jsonData;

  onMount(async () => add());

  async function add() {
    const response = await fetch(URL.products + "category/" + category);
    const data = await response.json();
    $jsonData = [];
    $jsonData = await data;
  }

  function findGetParameter(parameterName) {
    var result = null,
      tmp = [];
    location.search
      .substr(1)
      .split("?")
      .forEach(function(item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
    return result;
  }
</script>

<style>
  .breadcrumb {
    border-radius: 0;
    padding: 0.9rem 7.5rem;
  }

  :global(.return a) {
    color: white;
  }

  :global(.return a:hover) {
    color: lightgray;
  }
</style>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="nav-item return">
      <Link to="/">
        <i class="fas fa-arrow-circle-left" />
        Volver
      </Link>
    </li>
  </ol>
</nav>
<div class="container">
  <br />
  <Search bind:search />

  <div class="row">
    {#each dataResponse as product}
      {#if product.stock > 0}
        <Product {product}>
          <div style="text-align: right">
            {#if $logged}
              <Button document={product} type="addToCart" collection="carts" />
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
      {/if}
    {/each}
  </div>
</div>
