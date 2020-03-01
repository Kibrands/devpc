<script>
  import Button from "./Button.svelte";
  export let user = {};
</script>

<style>
  #reqFieldsAdvisor {
    font-size: 0.7em;
    color: gray;
  }
</style>

<form id="registerForm" method="POST" action="">
  <span id="reqFieldsAdvisor">Los campos con * son obligatorios</span>
  <br />
  <div class="form-row">
    <div class="col">Nombre de usuario *</div>
  </div>
  <div class="form-row">
    <div class="col">
      <input bind:value={user.nick} type="text" class="form-control" required />
    </div>
  </div>
  <div class="form-row">
    <div class="col">Email *</div>
  </div>
  <div class="form-row">
    <div class="col">
      <input
        bind:value={user.email}
        type="email"
        class="form-control"
        required />
    </div>
  </div>
  <div class="form-row">
    <div class="col">Contrase&ntilde;a *</div>
  </div>
  <div class="form-row">
    <div class="col">
      <input
        bind:value={user.password}
        type="password"
        class="form-control"
        required />
    </div>
  </div>
  <div class="form-row">
    <div class="col">Direcci&oacute;n *</div>
  </div>
  <div class="form-row">
    <div class="col">
      <input
        bind:value={user.adress}
        type="text"
        class="form-control"
        required />
    </div>
  </div>
  <br />
  <slot />
</form>
