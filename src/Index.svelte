<script>
  import { Link } from "svelte-routing";
  import { onMount, getContext } from "svelte";
  import { jsonData, logged } from "./store.js";

  import Search from "./Search.svelte";
  import Product from "./Product.svelte";
  import Button from "./Button.svelte";

  const URL = getContext("URL");
  let product = {};
  let search = "";
  let opened = true;
  let cart = [];

  let category = findGetParameter("cat");
  let fetchURL = URL.products;
  onMount(async () => {
    if (category != null && category != undefined && category != "") {
      fetchURL += "category/" + category;
      opened = false;
    }
    const response = await fetch(fetchURL);
    const data = await response.json();
    $jsonData = data;
  });

  $: regex = new RegExp(search, "i");
  $: dataResponse = search
    ? $jsonData.filter(item => regex.test(item.title))
    : $jsonData;

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

  #navbarDropdown {
    color: white;
  }

  .dropdown-menu {
    color: black;
    padding: 20px;
  }

  .nav-item {
    padding: auto 100px auto 100px;
  }
</style>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#dropdown-button"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Ordenadores
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="?cat=LAPTOP">Port&aacute;tiles</a>
        <a class="dropdown-item" href="?cat=PC">Sobremesa</a>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#dropdown-button"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Componentes
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="?cat=CPU">CPU</a>
        <a class="dropdown-item" href="?cat=RAM">RAM</a>

      </div>

    </li>

    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#dropdown-button"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Smartphones
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="?cat=SAMSUNG">Samsung</a>
        <a class="dropdown-item" href="?cat=NOKIA">Nokia</a>
      </div>

    </li>
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#dropdown-button"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Audio | Foto | Vídeo
      </a>

    </li>

    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#dropdown-button"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Periféricos
      </a>

    </li>
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#dropdown-button"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Televisores
      </a>
    </li>

    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#dropdown-button"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Tablets
      </a>
    </li>

    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#dropdown-button"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Consolas
      </a>
    </li>

    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#dropdown-button"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Impresoras
      </a>
    </li>

  </ol>
</nav>

<div class="container">
  {#if opened}
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
          <img
            class="d-block w-100"
            src="img/ordenador.jpg"
            alt="First slide" />
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
  {/if}
  <br />
  <Search bind:search />

  <div class="row">
    {#each dataResponse as product}
      {#if product.stock > 0}
        <Product {product}>
          <div style="text-align: right">
            {#if $logged}
              <Button
                document={product}
                type="addToCart"
                collection="carts" />
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
