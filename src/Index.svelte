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

  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active" />
      <li data-target="#carouselExampleIndicators" data-slide-to="1" />
      <li data-target="#carouselExampleIndicators" data-slide-to="2" />
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="img/ordenador.jpg" alt="First slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="img/reloj.jpg" alt="Second slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="img/movil.jpg" alt="Third slide" />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="sr-only">Next</span>
    </a>
  </div>

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
