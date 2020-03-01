<script>
  import { Link } from "svelte-routing";
  import Button from "./Button.svelte";
  import { visibility, show, user } from "./store.js";

  let userToPut = { nick: "" };

  let passwds = [];
</script>

<style>
  .breadcrumb {
    border-radius: 0;
    padding: 0.9rem 7.5rem;
  }
</style>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <Link to="/">
        <i class="fas fa-home" />
        Inicio
      </Link>
    </li>
    <li class="breadcrumb-item active" aria-current="page">
      Restablecimiento de contraseña
    </li>
  </ol>
</nav>
<div class="container">
  <h2>Restablecimiento de contraseña</h2>

  {#if !$show}
    <div class="form-group">
      <label>Username</label>
      <input
        bind:value={userToPut.nick}
        id="userNick"
        type="text"
        class="form-control"
        required="required" />
    </div>
    <div class="modal-footer">
      <Button
        document={userToPut}
        type="forgot"
        collection="users" />
    </div>
  {/if}
  {#if $show}
    <div id="passForm" method="PUT" action="">
      <div class="form-group">
        <div class="form-row">
          <div class="col">Username</div>
          <div class="form-row">
            <div class="col">
              <b>{user.data.nick}</b>
            </div>
          </div>
        </div>
      </div>
      <h5>Nueva contraseña</h5>
      <div class="form-group">
        <div class="form-row">
          <div class="col">Contrase&ntilde;a *</div>
          <div class="form-row">
            <div class="col">
              <input
                bind:value={passwds[0]}
                id="pass1"
                type="password"
                class="form-control"
                required />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="form-row">
        <div class="col">Repita la contrase&ntilde;a *</div>
        <div class="form-row">
          <div class="col">
            <input
              bind:value={passwds[1]}
              id="pass2"
              type="password"
              class="form-control"
              required />
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <Button
        document={passwds}
        type="newPass"
        collection="users"
        dataDismiss="modal" />
    </div>
  {/if}
</div>
