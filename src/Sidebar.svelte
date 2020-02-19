<script>
  import { getContext } from "svelte";
  import { fly } from "svelte/transition";
  import { Link } from "svelte-routing";
  import { category } from "./store.js";

  export let show = false;

  function setCategory(cat) {
    category.set(cat);
  }
</script>

<style>
  nav {
    position: fixed;
    top: 9.3rem;
    left: 0;
    height: 100%;
    padding: 1.5rem 1rem 0.6rem;
    border-right: 1px solid #aaa;
    background: #fff;
    overflow-y: auto;
    width: 15rem;
  }

  #sidebar {
    z-index: 2;
  }

  li {
    list-style: none;
  }

  .dropdown-menu {
    margin-left: 100%;
  }

  .dropdown {
    padding: 10px 0;
  }
</style>

{#if show}
  <nav transition:fly={{ x: -150, opacity: 0 }} id="sidebar">
    <p>
      <button
        class="btn"
        type="button"
        data-toggle="collapse"
        data-target="#collapseOrdenadores"
        aria-expanded="false"
        aria-controls="collapseOrdenadores">
        <i class="fas fa-cubes" />
        Ordenadores
      </button>
    </p>
    <div class="collapse" id="collapseOrdenadores">
      <li>
        <a href="javascript:setCategory('CPU')">CPU</a>
      </li>
      <li>
        <a href="javascript:">RAM</a>
      </li>
    </div>

    <p>
      <button
        class="btn"
        type="button"
        data-toggle="collapse"
        data-target="#collapseComponentes"
        aria-expanded="false"
        aria-controls="collapseComponentes">
        <i class="fas fa-laptop" />
        Componentes
      </button>
    </p>
    <div class="collapse" id="collapseComponentes">
      <li>
        <a href="javascript:">Portátiles</a>
      </li>
      <li>
        <a href="javascript:">Sobremesa</a>
      </li>
    </div>

    <p>
      <button
        class="btn"
        type="button"
        data-toggle="collapse"
        data-target="#collapseSmartphones"
        aria-expanded="false"
        aria-controls="collapseSmartphones">
        <i class="fas fa-mobile" />
        Smartphones
      </button>
    </p>
    <div class="collapse" id="collapseSmartphones" />

    <p>
      <button
        class="btn"
        type="button"
        data-toggle="collapse"
        data-target="#collapseAudio"
        aria-expanded="false"
        aria-controls="collapseAudio">
        <i class="fas fa-file-audio" />
        Audio | Foto | Vídeo
      </button>
    </p>
    <div class="collapse" id="collapseAudio" />

    <p>
      <button
        class="btn"
        type="button"
        data-toggle="collapse"
        data-target="#collapseMouse"
        aria-expanded="false"
        aria-controls="collapseMouse">
        <i class="fas fa-mouse" />
        Periféricos
      </button>
    </p>
    <div class="collapse" id="collapseMouse" />

    <p>
      <button
        class="btn"
        type="button"
        data-toggle="collapse"
        data-target="#collapseContacto"
        aria-expanded="false"
        aria-controls="collapseContacto">
        <i class="fas fa-headset" />
        <Link to="/contact">&nbsp;Contacto</Link>
      </button>
    </p>
    <div class="collapse" id="collapseContacto" />
    <!--

    <li class="dropdown">
      <i class="fas fa-cubes" />
      <a
        href="#components"
        class="dropdown-toggle"
        data-toggle="dropdown"
        role="button"
        aria-expanded="false">
        &nbsp;&nbsp;&nbsp;Componentes
        <span class="caret" />
      </a>
      <ul class="dropdown-menu px-1" role="menu">
        <li>
          <a href="javascript:setCategory('CPU')">CPU</a>
        </li>
        <li>
          <a href="javascript:setCategory('RAM')">RAM</a>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <i class="fas fa-laptop" />
      <a
        href="#computers"
        class="dropdown-toggle"
        data-toggle="dropdown"
        role="button"
        aria-expanded="false">
        &nbsp;&nbsp;&nbsp;Ordenadores
        <span class="caret" />
      </a>
      <ul class="dropdown-menu px-1" role="menu">
        <li>
          <a href="javascript:setCategory('LAPTOP')">Portátiles</a>
        </li>
        <li>
          <a href="javascript:">Sobremesa</a>
        </li>
      </ul>
    </li>

    <p>
      <i class="fas fa-mobile"></i>
      <a href="#smartphones"></a>
    </p>
    <p>
      <i class="fas fa-file-audio" />
      <a href="#image-sound">Audio | Foto | Vídeo</a>
    </p>
    <p>
      <i class="fas fa-mouse" />
      <a href="#peripheral">Periféricos</a>
    </p>
    <p>
      <i class="fas fa-headset" />
      <Link to="/contact">&nbsp;Contacto</Link>
    </p>
    -->
  </nav>
{/if}
