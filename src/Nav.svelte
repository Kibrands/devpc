<script>
  import { Link } from "svelte-routing";
  import Button from "./Button.svelte";
  import Search from "./Search.svelte";
  import { visibility, logged, loginData, user, cartCount } from "./store.js";
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
    height: 15px;
    margin-top: inherit;
  }

  @media all and (max-width: 750px) {
    #mainNav {
      padding: 0.5rem !important;
    }
  }

  @media all and (max-width: 991px) {
    #collapsableMenu {
      display: contents;
    }
    #collapsableMenu div div ul {
      display: flex;
    }
    #collapsableMenu div div ul button {
      margin-top: 10px !important;
    }
    #collapsableMenu div div {
      display: contents;
    }
    #collapsableMenu div {
      padding: 2%;
      margin-left: 5%;
    }
  }

  #collpaseNavbarButton {
    padding: 10px 10px;
    height: fit-content;
  }
</style>

<nav id="mainNav" class="navbar navbar-expand-lg navbar-dark bg-dark px-5 py-0">
  <div
    id="logoDiv"
    class="row justify-content-between w-100 align-items-center">
    <div class="col-8 col-md-8">
      <Link to="/">
        <div class="py-0">
          <img
            class="float-left logo"
            src="img/logo-transparente.png"
            width="170"
            alt="devpc icon" />
        </div>
      </Link>
    </div>
    <button
      id="collpaseNavbarButton"
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarLogin"
      aria-controls="navbarLogin"
      aria-expanded="false"
      aria-label="Abrir menú">
      <span class="navbar-toggler-icon" />
    </button>
    <div id="collapsableMenu" class="text-right">
      <div class="collapse navbar-collapse" id="navbarLogin">
        <div class="form-inline float-right mt-0 mt-md-0">
          <ul class="navbar-nav mr-auto">
            {#if $logged}
              <Link to="/cart">
                <button
                  class="btn btn-dark cart"
                  style="visibility: {$visibility}">
                  <i class="fas fa-shopping-cart inversed" />
                </button>
                <div class="cartCount">
                  &nbsp;
                  <span>{$cartCount}</span>
                  &nbsp;
                </div>
              </Link>
              <Button type="logout" collection="users" />
            {/if}
            {#if !$logged}
              <Link to="/register">
                <button
                  class="btn btn-outline-light my-0 ml-2 my-sm-0"
                  id="registrarse">
                  Registrarse
                </button>
              </Link>
              <button
                class="btn btn-outline-light my-0 ml-2 my-sm-0"
                id="logIn"
                data-toggle="modal"
                data-target="#myModal">
                Iniciar Sesión
              </button>
            {/if}
          </ul>
        </div>
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
              <a href="#forgot" data-dismiss="modal">
                <Link to="/forgot">
                  <small class="pull-right text-muted">Forgot?</small>
                </Link>
              </a>
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
