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
  let category = "";

  function setCategory(cat) {
    category = cat;
  }

  // TODO -> Al pulsar la opción del sidebar, debe coger la categoría
  let findUrl = category == "" ? "" : "category/" + category;

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

  #navbarDropdown {
    color: white;
  }

  .dropdown-item {
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
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Ordenadores
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="javascript:{setCategory('LAPTOP')}">Portátiles</a>
        <a class="dropdown-item" href="#">Sobremesa</a>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Componentes
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#">CPU</a>
        <a class="dropdown-item" href="#">RAM</a>

      </div>

    </li>

    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Smartphones
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#">Samsung</a>
        <a class="dropdown-item" href="#">Nokia</a>
      </div>

    </li>
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
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
        href="#"
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
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Televisores
      </a>

    </li>

    <li class="nav-item">
      <a
        class="nav-link "
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <Link to="/contact">Contacto</Link>
      </a>

    </li>

  </ol>
</nav>

<div class="container">
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
