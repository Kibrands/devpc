<script>
  import { Link } from "svelte-routing";
  import { user, logged } from "./store.js";

  let contactForm = {};
  function getEmail() {
    if ($logged) {
      return user.data.email;
    } else {
      return "";
    }
  }
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
  h2,
  #subtitulo {
    text-align: center;
  }
</style>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <Link to="/">Inicio</Link>
    </li>
    <li class="breadcrumb-item active" aria-current="page">
      Centro de soporte
    </li>
  </ol>
</nav>
<div class="container">
  <br />
  <h2>Centro de soporte</h2>
  <p id="subtitulo">
    ¿Alguna duda? No dude en contactar con nosotros o en mirar las dudas
    frecuentes
  </p>
  <hr
    style="border-color:red;"
    size="2px"
    width="80%"
    noshade="noshade"
    align="center" />
  <br />
  <div class="row">
    <div class="col-xl-5">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="email">Email*</label>
            {#if $logged}
              {#await getEmail() then email}
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  value={email}
                  readonly />
              {/await}
            {/if}
            {#if !$logged}
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                required />
            {/if}
          </div>
          <div class="form-group col-md-6">
            <label for="nombre">Nombre*</label>
            <input
              type="text"
              class="form-control"
              id="nombre"
              placeholder="Nombre"
              required />
          </div>
        </div>
        <div class="form-group">
          <label for="direccion">Dirección*</label>
          <input
            type="text"
            class="form-control"
            id="direccion"
            placeholder="C/ "
            required />
        </div>
        <div class="form-group">
          <label for="asunto">Asunto*</label>
          <select id="asunto" class="form-control" required>
            <option selected />
            <option>Devoluciones</option>
            <option>Garantías</option>
            <option>Ventas</option>
            <option>Otro</option>
          </select>
        </div>
        <div class="form-group">
          <label for="mensaje">Mensaje</label>
          <textarea class="form-control" id="mensaje" rows="3" />
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="gridCheck"
            required />
          <label class="form-check-label" for="gridCheck">
            He leído y acepto la política de protección de datos.
          </label>
        </div>
        <br />
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
    <div class="col-xl-7">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            title=""
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.096526959414!2d-5.084053649238877!3d37.552789532573975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd12caea8e08f2bb%3A0x4dd34539e2aa7b93!2sI.E.S.%20Luis%20V%C3%A9lez%20de%20Guevara!5e0!3m2!1ses!2ses!4v1582707816838!5m2!1ses!2ses"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen="" />
        </div>
      </div>
    </div>
  </div>
</div>
