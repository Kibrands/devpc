<script>
  import { Link } from "svelte-routing";
</script>

<style>
  #categoriesNav {
    border-radius: 0;
    margin-bottom: 10px;
    padding-left: 150px;
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

  @media all and (max-width: 991px) {
    #categoriesNav ol {
      padding: 0.9rem 0.5rem;
      text-align: left;
      display: block;
    }
  }
</style>

<!--<nav id="categoriesNav" aria-label="breadcrumb navbar-expand-lg" >
  <ol id="collapseBreadcrumb" class="breadcrumb">
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
        <Link to="/products?cat=MOTHERBOARD">Placas base</Link>
        <Link to="/products?cat=CPU">CPU</Link>
        <Link to="/products?cat=RAM">RAM</Link>
        <Link to="/products?cat=GRAPHIC_BOARD">Tarjetas gr&aacute;ficas</Link>
        <Link to="/products?cat=HDD">Discos Duros</Link>
        <Link to="/products?cat=SSD">Memorias SSD</Link>
        <Link to="/products?cat=M2">Memorias M.2</Link>
        <Link to="/products?cat=POWER">Fuentes de alimentaci&oacute;n</Link>
        <Link to="/products?cat=OS">Sistemas Operativos</Link>
        <Link to="/products?cat=CASE">Torres/Carcasas</Link>
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
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to="/products?cat=TV">Televisores</Link>
        <Link to="/products?cat=CAMERA">C&aacute;maras</Link>
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
        Periféricos
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to="/products?cat=SCREEN">Monitores</Link>
        <Link to="/products?cat=KEYBOARD">Teclados</Link>
        <Link to="/products?cat=MOUSE">Ratones</Link>
        <Link to="/products?cat=SPEAKERS">Altavoces</Link>
        <Link to="/products?cat=HEADPHONES">Auriculares/Cascos</Link>
        <Link to="/products?cat=GAMING_CHAIR">Sillas Gaming</Link>
        <Link to="/products?cat=MICROPHONE">Micr&oacute;fonos</Link>
        <Link to="/products?cat=USB_MEMORY">Memoria USB</Link>
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
        Tablets
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to="/products?cat=SAMSUNG_TABLET">SAMSUNG</Link>
        <Link to="/products?cat=HUAWEI_TABLET">HUAWEI</Link>
        <Link to="/products?cat=LENOVO_TABLET">LENOVO</Link>
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
        Consolas
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to="/products?cat=PS4">PS4</Link>
        <Link to="/products?cat=NINTENDO_SWITCH">Nintendo Switch</Link>
        <Link to="/products?cat=XBOX_ONE">XBox One</Link>
        <Link to="/products?cat=DS_3DS">DS/3DS</Link>
      </div>
    </li>
  </ol>
</nav>-->

<nav id="categoriesNav" class="navbar navbar-expand-lg navbar-light" style="background-color: rgba(46, 115, 131, 0.651);">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
      <a
        class="mx-4 nav-link dropdown-toggle"
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
        class="mx-4 nav-link dropdown-toggle"
        href="#dropdown-button"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Componentes
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to="/products?cat=MOTHERBOARD">Placas base</Link>
        <Link to="/products?cat=CPU">CPU</Link>
        <Link to="/products?cat=RAM">RAM</Link>
        <Link to="/products?cat=GRAPHIC_BOARD">Tarjetas gr&aacute;ficas</Link>
        <Link to="/products?cat=HDD">Discos Duros</Link>
        <Link to="/products?cat=SSD">Memorias SSD</Link>
        <Link to="/products?cat=M2">Memorias M.2</Link>
        <Link to="/products?cat=POWER">Fuentes de alimentaci&oacute;n</Link>
        <Link to="/products?cat=OS">Sistemas Operativos</Link>
        <Link to="/products?cat=CASE">Torres/Carcasas</Link>
      </div>
    </li>
      <li class="nav-item dropdown">
      <a
        class="mx-4 nav-link dropdown-toggle"
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
        class="mx-4 nav-link dropdown-toggle"
        href="#dropdown-button"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Audio | Foto | Vídeo
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to="/products?cat=TV">Televisores</Link>
        <Link to="/products?cat=CAMERA">C&aacute;maras</Link>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a
        class="mx-4 nav-link dropdown-toggle"
        href="#dropdown-button"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Periféricos
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to="/products?cat=SCREEN">Monitores</Link>
        <Link to="/products?cat=KEYBOARD">Teclados</Link>
        <Link to="/products?cat=MOUSE">Ratones</Link>
        <Link to="/products?cat=SPEAKERS">Altavoces</Link>
        <Link to="/products?cat=HEADPHONES">Auriculares/Cascos</Link>
        <Link to="/products?cat=GAMING_CHAIR">Sillas Gaming</Link>
        <Link to="/products?cat=MICROPHONE">Micr&oacute;fonos</Link>
        <Link to="/products?cat=USB_MEMORY">Memoria USB</Link>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a
        class="mx-4 nav-link dropdown-toggle"
        href="#dropdown-button"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Tablets
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to="/products?cat=SAMSUNG_TABLET">SAMSUNG</Link>
        <Link to="/products?cat=HUAWEI_TABLET">HUAWEI</Link>
        <Link to="/products?cat=LENOVO_TABLET">LENOVO</Link>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a
        class="mx-4 nav-link dropdown-toggle"
        href="#dropdown-button"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Consolas
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to="/products?cat=PS4">PS4</Link>
        <Link to="/products?cat=NINTENDO_SWITCH">Nintendo Switch</Link>
        <Link to="/products?cat=XBOX_ONE">XBox One</Link>
        <Link to="/products?cat=DS_3DS">DS/3DS</Link>
      </div>
    </li>
    </ul>
  </div>
</nav>
