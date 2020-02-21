<script>
  import { Link } from "svelte-routing";
  import { user, logged } from "./store.js";

  let contactForm = {};
</script>

<style>
  .mapouter {
    position: relative;
    text-align: right;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    border: 2px solid #387b8a;
  }
  .breadcrumb {
    border-radius: 0;
  }
  h2, #subtitulo{
    text-align: center;
  }
</style>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <Link to="/">
        Inicio
      </Link>
    </li>
    <li class="breadcrumb-item active" aria-current="page">Centro de soporte</li>
  </ol>
</nav>
<div class="container">
  <h2>Centro de soporte</h2>
  <p id="subtitulo">¿Alguna duda? No dude en contactar con nosotros o en mirar las dudas frecuentes</p>
  <div class="row">
    <div class="col-8">
      <div class="form-group row">
        <label id="email" for="email" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          {#if $logged}
            <input
              bind:value={contactForm.email}
              type="email"
              class="form-control"
              id="email"
              readonly />
          {/if}
          {#if !$logged}
            <input
              bind:value={contactForm.email}
              type="email"
              class="form-control"
              id="email" />
          {/if}
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            title="Situación"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=ies%20luis%20velez&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0" />
        </div>
      </div>
    </div>
  </div>
</div>
