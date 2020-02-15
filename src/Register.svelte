<script>
  import { Link } from "svelte-routing";
  import User from './User.svelte';
  import Button from './Button.svelte';

  let user = {};
</script>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to="/"><i class="fas fa-home"></i> Inicio</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Registro</li>
  </ol>
</nav>
<div class="container">
    <h2>Registro</h2>
    <User bind:user>
      <div style="text-align: right">
        <Button document={user} type="register" collection="users" />
      </div>
    </User>
</div>