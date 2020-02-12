<script>
  import { Link } from "svelte-routing";
</script>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to="/"><i class="fas fa-home"></i> Inicio</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Productos</li>
  </ol>
</nav>
<div class="container">
  <h2>Inicio</h2>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</div>
