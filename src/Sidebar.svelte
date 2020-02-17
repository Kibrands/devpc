<script>
  import { getContext } from "svelte";
  import { fly } from "svelte/transition";
  import { Link } from "svelte-routing";

  export let show = false;
</script>

<style>
  nav {
    position: fixed;
    top: 9.7rem;
    left: 0;
    height: 100%;
    padding: 2rem 1rem 0.6rem;
    border-right: 1px solid #aaa;
    background: #fff;
    overflow-y: auto;
    width: 20rem;
  }
</style>

{#if show}
  <nav transition:fly={{ x: 150, opacity: 0 }}>
    <p>
      <i class="fas fa-cubes" />
      <a href="#components">&nbsp;&nbsp;&nbsp;Componentes</a>
    </p>
    <p>
      <i class="fas fa-laptop" />
      <a href="#computers">&nbsp;&nbsp;Ordenadores</a>
    </p>
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
  </nav>
{/if}
