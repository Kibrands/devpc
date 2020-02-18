<script>
  import { getContext } from "svelte";
  import { fly } from "svelte/transition";
  import { Link } from "svelte-routing";
  import { category } from "./store.js";

  export let show = false;

  function setCategory(cat) {
    $category = cat;
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
    width: 20rem;
  }

  #sidebar {
    z-index: 2;
  }

  li {
    list-style: none;
  }

  .dropdown-menu {
    margin-left: 10%;
  }

  .dropdown{
    padding: 10px 0;
  }
</style>

{#if show}
  <nav transition:fly={{ x: -150, opacity: 0 }} id="sidebar">
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
          <a href="javascript:">RAM</a>
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
          <a href="javascript:">Portátiles</a>
        </li>
        <li>
          <a href="javascript:">Sobremesa</a>
        </li>
      </ul>
    </li>
    <p>
      <i class="fas fa-mobile">&nbsp;</i>
      <a href="#smartphones">&nbsp;&nbsp;&nbsp;&nbsp;Smartphones</a>
    </p>
    <p>
      <i class="fas fa-file-audio" />
      <a href="#image-sound">&nbsp;&nbsp;&nbsp;Audio | Foto | Vídeo</a>
    </p>
    <p>
      <i class="fas fa-mouse" />
      <a href="#peripheral">&nbsp;&nbsp;&nbsp;Periféricos</a>
    </p>
    <p>
      <i class="fas fa-headset" />
      <Link to="/contact">&nbsp;Contacto</Link>
    </p>
  </nav>
{/if}
