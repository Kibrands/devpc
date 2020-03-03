<script>
  import { onMount, getContext } from "svelte";
  import { jsonData, logged } from "./store.js";

  import Product from "./Product.svelte";
  import Button from "./Button.svelte";
  import Search from "./Search.svelte";
  import ProductsNav from "./ProductsNav.svelte";
  import Modal from "svelte-simple-modal";
  

  const URL = getContext("URL");
  let product = {};
  let cart = [];
  let search = "";

  $: regex = new RegExp(search, "i");
  $: dataResponse = search
    ? $jsonData.filter(item => regex.test(item.title))
    : $jsonData;

  onMount(async () => {
    add();
  });

  async function add() {
    const response = await fetch(URL.products);
    const data = await response.json();
    $jsonData = [];
    $jsonData = await data;
  }
</script>

<ProductsNav />
<div class="container">
  <a class="ir-arriba" href="#" title="Volver arriba">
    <span class="fa-stack">
      <i class="fas fa-arrow-up"></i>
    </span>
  </a>
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
  <br />
  <Search bind:search />
  <div class="row">
    {#each dataResponse as product}
      {#if product.dto > 10}
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
      {/if}
    {/each}
  </div>
</div>
