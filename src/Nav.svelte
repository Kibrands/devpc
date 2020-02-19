<script>
  import { Link } from "svelte-routing";
  import { onMount, getContext } from "svelte";
  import Button from "./Button.svelte";
  import Sidebar from "./Sidebar.svelte";
  import { visibility, logged, loginData } from "./store.js";

  let sidebar_show = false;
</script>

<style>
  .cart {
    border-radius: 50%;
  }

  .cartCount {
    color: white;
    background-color: red;
    font-size: 0.6em;
    border-radius: 50%;
    margin-left: -10px;
    margin-top: -20px;
  }
</style>

<header>
  <div class="myLine">
    <br />
  </div>
</header>
<nav class="navbar-light bg-light px-5 py-0">
  <div class="row">
    <div class="col">
      <Link to="/">
        <div class="py-0">
          <img
            class="float-left logo"
            src="img/logo-transparente.png"
            width="90"
            alt="devpc icon" />
        </div>
      </Link>
      <div class="ml-2 pt-4">
        <div id="menu-toggle">
          <button
            on:click={() => (sidebar_show = !sidebar_show)}
            class="btn btn-dark">
            <i class="fas fa-bars" />
          </button>
          <Sidebar bind:show={sidebar_show} />
        </div>
      </div>
    </div>
    <div class="col">
      <div class="form-inline float-right mt-0 mt-md-0 pt-4">
        {#if $logged}
          <Link to="/cart">
            <button class="btn btn-dark cart" style="visibility: {$visibility}">
              <i class="fas fa-shopping-cart inversed" />
            </button>
            <div class="cartCount">
              &nbsp;
              <span>0</span>
              &nbsp;
            </div>
          </Link>
          <Button type="logout" collection="users" />
        {/if}
        {#if !$logged}
          <Link to="/register">
            <div class="btn btn-dark pull-right">Registrarse</div>
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
    </div>
  </div>
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
              <Link to="/forgot">
                <small class="pull-right text-muted">Forgot?</small>
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
            dataDismiss="modal" />
        </div>
      </div>
    </div>
  </div>

</nav>
