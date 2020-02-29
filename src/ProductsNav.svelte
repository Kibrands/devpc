<script>
  import { Link } from "svelte-routing";
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

  :global(.dropdown-menu a) {
    padding: auto 100px auto 100px !important;
    color: black;
    display: block;
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
        <Link to="/products?cat=LAPTOP">Port&aacute;tiles</Link>
        <Link to="/products?cat=PC">Sobremesa</Link>
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
        <Link to="/products?cat=CPU">CPU</Link>
        <Link to="/products?cat=RAM">RAM</Link>
        <Link to="/products?cat=GRAPHIC_BOARD">Tarjetas gr&aacute;ficas</Link>
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
        <Link to="/products?cat=SAMSUNG">SAMSUNG</Link>
        <Link to="/products?cat=NOKIA">NOKIA</Link>
        <Link to="/products?cat=IPHONE">IPHONE</Link>
        <Link to="/products?cat=XIAOMI">XIAOMI</Link>
        <Link to="/products?cat=SMARTPHONE_ACC">Accesorios</Link>
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
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to="/products?cat=KEYBOARD">Teclados</Link>
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
  </ol>
</nav>
