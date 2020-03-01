<script>
  import { Link } from "svelte-routing";
  import Button from "./Button.svelte";
  import { visibility, show, loginData, user } from "./store.js";
</script>

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
        bind:value={loginData.nick}
        id="loginNick"
        type="text"
        class="form-control"
        required="required" />
    </div>
    <div class="modal-footer">
      <Button
        document={loginData}
        type="forgot"
        collection="users"
        dataDismiss="modal" />
    </div>
  {/if}
  {#if $show}
  <div id="passForm" method="PUT" action="">
  <div class="form-group">
    <div class="form-row">
        <div class="col">Username</div>
        <div class="form-row">
          <div class="col">
            <b>
      <input
        bind:value={loginData.nick}
        id="loginNick"
        type="text"
        class="form-control"
        required="required" />
      </b>
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
              bind:value={user.password}
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
              bind:value={user.password}
              type="password"
              class="form-control"
              required />
          </div>
        </div>
    </div>
    </div>
    <div class="modal-footer">
      <Button
        document={loginData}
        type="newPass"
        collection="users"
        dataDismiss="modal" />
    </div>
  {/if}
</div>
