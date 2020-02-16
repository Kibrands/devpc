{#if show}
  <nav transition:fly={{x: 200, opacity: 1}}>
    <p><i class="fas fa-cubes"></i><a href="#">&nbsp;&nbsp;&nbsp;Componentes</a></p>
    <p><i class="fas fa-laptop"></i><a href="#">&nbsp;&nbsp;Ordenadores</a></p>
    <p><i class="fas fa-mobile">&nbsp;</i><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;Smartphones</a></p>
    <p><i class="fas fa-file-audio"></i><a href="#">&nbsp;&nbsp;&nbsp;Audio | Foto | Vídeo</a></p>
    <p><i class="fas fa-mouse"></i><a href="#">&nbsp;&nbsp;&nbsp;Periféricos</a></p>
  </nav>
{/if}


<script>
import { fly } from 'svelte/transition';

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