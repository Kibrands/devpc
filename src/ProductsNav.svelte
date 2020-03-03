<script>
  import { Link } from "svelte-routing";
</script>

<style>
  #categoriesNav {
    border-radius: 0;
    margin-bottom: 10px;
    padding-left: 20%;
  }

  #navbarDropdown {
    color: white;
  }

  .dropdown-menu {
    color: black;
    padding: 20px;
  }

a.dropdown-item {
  background-color: white;
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

<nav
  id="categoriesNav"
  class="navbar navbar-expand-lg navbar-light "
  style="background: linear-gradient(180deg, #154854, rgba(46, 115, 131, 0.651);">
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" />
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="dropdown">
      <button
        class="btn text-white dropdown-toggle"
        type="button"
        id="ordenadores"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Ordenadores
      </button>
      <div class="dropdown-menu" aria-labelledby="ordenadores">
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=LAPTOP">Port&aacute;tiles</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=PC">Sobremesa</Link>
        </a>
      </div>
    </div>

    <div class="dropdown">
      <button
        class="btn text-white dropdown-toggle"
        type="button"
        id="componentes"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Componentes
      </button>
      <div class="dropdown-menu" aria-labelledby="ordenadores">
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=MOTHERBOARD">Placas base</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=CPU">CPU</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=RAM">RAM</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=GRAPHIC_BOARD">Tarjetas gr&aacute;ficas</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=HDD">Discos Duros</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=SSD">Memorias SSD</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=M2">Memorias M.2</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=POWER">Fuentes de alimentaci&oacute;n</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=OS">Sistemas Operativos</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=CASE">Torres/Carcasas</Link>
        </a>
      </div>
    </div>

    <div class="dropdown">
      <button
        class="btn text-white dropdown-toggle"
        type="button"
        id="smartphones"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Smartphones
      </button>
      <div class="dropdown-menu" aria-labelledby="smartphones">
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=SAMSUNG">Samsung</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=NOKIA">Nokia</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=IPHONE">Iphone</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=XIAOMI">Xiaomi</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=SMARTPHONE_ACC">Accesorios</Link>
        </a>
      </div>
    </div>

    <div class="dropdown">
      <button
        class="btn text-white dropdown-toggle"
        type="button"
        id="audio"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Audio | Foto | Vídeo
      </button>
      <div class="dropdown-menu" aria-labelledby="audio">
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=TV">Televisores</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=CAMERA">C&aacute;maras</Link>
        </a>
      </div>
    </div>

    <div class="dropdown">
      <button
        class="btn text-white dropdown-toggle"
        type="button"
        id="perifericos"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Perif&eacute;ricos
      </button>
      <div class="dropdown-menu" aria-labelledby="perifericos">
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=SCREEN">Monitores</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=KEYBOARD">Teclados</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=MOUSE">Ratones</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=SPEAKERS">Altavoces</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=HEADPHONES">Auriculares/Cascos</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=GAMING_CHAIR">Sillas Gaming</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=MICROPHONE">Micr&oacute;fonos</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=USB_MEMORY">Memoria USB</Link>
        </a>
      </div>
    </div>

    <div class="dropdown">
      <button
        class="btn text-white dropdown-toggle"
        type="button"
        id="tablets"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Tablets
      </button>
      <div class="dropdown-menu" aria-labelledby="tablets">
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=SAMSUNG_TABLET">Samsung</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=HUAWEI_TABLET">Huawei</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=LENOVO_TABLET">Lenovo</Link>
        </a>
      </div>
    </div>

    <div class="dropdown">
      <button
        class="btn text-white dropdown-toggle"
        type="button"
        id="consolas"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Consolas
      </button>
      <div class="dropdown-menu" aria-labelledby="consolas">
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=PS4">PS4</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=NINTENDO_SWITCH">Nintendo Switch</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=XBOX_ONE">XBox One</Link>
        </a>
        <a class="dropdown-item" href="#">
          <Link to="/products?cat=DS_3DS">DS/3DS</Link>
        </a>
      </div>
    </div>
  </div>
</nav>
