<script>
  import { Link } from "svelte-routing";
  import { onMount, getContext } from "svelte";
  import Button from "./Button.svelte";

  let visibility = "hidden";
  let user = { loggedIn: false };

  function toggle() {
    user.loggedIn = !user.loggedIn;
    if (visibility == "hidden") visibility = "";
    else visibility = "hidden";
  }

  let loginData = {};

  function getLoginData() {
    loginData.nick = window.document.getElementById("loginNick").value;
    loginData.password = window.document.getElementById("loginPassword").value;
    if (loginData.nick != "" && loginData.password != "") {
      console.log(loginData);
      return loginData;
    } else {
      alert("ERROR");
    }
  }
</script>

<style>

</style>

<header>
  <div class="myLine">
    <br />
  </div>
</header>
<nav class="navbar-light bg-light px-5 py-0">
  <Link to="/">
    <div class="navbar-brand py-0">
      <img
        class="float-left logo"
        src="img/logo-transparente.png"
        width="90"
        alt="devpc icon" />
    </div>
  </Link>
  <div class="form-inline float-right mt-0 mt-md-0 pt-4">
    {#if user.loggedIn}
      <div style="visibility: {visibility}">Carrito</div>
      <Button type="logout" collection="users" />
      <button
        class="btn btn-outline-dark my-0 ml-2 my-sm-0"
        id="logIn"
        on:click={toggle}>
        Log out
      </button>
    {/if}

    {#if !user.loggedIn}
      <Link to="/register">
        <div class="btn btn-primary pull-right">Registrarse</div>
      </Link>
      <button
        class="btn btn-outline-dark my-0 ml-2 my-sm-0"
        id="logIn"
        data-toggle="modal"
        data-target="#myModal">
        Log in
      </button>
    {/if}
  </div>
  <div class="ml-2 float-left pt-4">
    <div class="btn btn-dark" id="menu-toggle">
      <i class="fas fa-bars" />
    </div>
  </div>
  <!-- MENU LATERAL -->

  <!-- Modal HTML -->
  <div id="myModal" class="modal fade">
    <div class="modal-dialog modal-login">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Iniciar sesión</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-hidden="true">
            &times;
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Username</label>
            <input
              bind:value={loginData.nick}
              id="loginNick"
              type="text"
              class="form-control"
              required="required" />
          </div>
          <div class="form-group">
            <div class="clearfix">
              <label>Password</label>
              <Link to="/forgot" class="pull-right text-muted">
                <small>Forgot?</small>
              </Link>
            </div>
            <input
              bind:value={loginData.password}
              id="loginPassword"
              type="password"
              class="form-control"
              required="required" />
          </div>
          <label class="checkbox-inline pull-left">
            <input type="checkbox" />
            Remember me
          </label>
        </div>
        <div class="modal-footer">
          <Button
            document={loginData}
            type="login"
            collection="users"
            data-dismiss="modal" />
        </div>
      </div>
    </div>
  </div>
</nav>
