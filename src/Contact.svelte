<script>
  import { Link } from "svelte-routing";
  import { user, logged, token } from "./store.js";
  import { onMount } from "svelte";
  import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

  let contactForm = {};
  var map;

  var size = 200;

  var images = {
    popup: "https://docs.mapbox.com/mapbox-gl-js/assets/popup.png"
  };

  function loadImages(urls, callback) {
    var results = {};
    for (var name in urls) {
      map.loadImage(urls[name], makeCallback(name));
    }

    function makeCallback(name) {
      return function(err, image) {
        results[name] = err ? null : image;

        // if all images are loaded, call the callback
        if (Object.keys(results).length === Object.keys(urls).length) {
          callback(results);
        }
      };
    }
  }

  function getEmail() {
    if ($logged) {
      return user.data.email;
    } else {
      return "";
    }
  }

  onMount(async () => {
    mapboxgl.accessToken = $token;
    map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-5.08403, 37.5527853], // starting position [lng, lat]
      zoom: 15 // starting zoom
    });

    // implementation of CustomLayerInterface to draw a pulsing dot icon on the map
    // see https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface for more info
    var pulsingDot = await {
      width: size,
      height: size,
      data: new Uint8Array(size * size * 4),

      // get rendering context for the map canvas when layer is added to the map
      onAdd: function() {
        var canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext("2d");
      },

      // called once before every frame where the icon will be used
      render: function() {
        var duration = 1000;
        var t = (performance.now() % duration) / duration;

        var radius = (size / 2) * 0.3;
        var outerRadius = (size / 2) * 0.7 * t + radius;
        var context = this.context;

        // draw outer circle
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          outerRadius,
          0,
          Math.PI * 2
        );
        context.fillStyle = "rgba(255, 200, 200," + (1 - t) + ")";
        context.fill();

        // draw inner circle
        context.beginPath();
        context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(255, 100, 100, 1)";
        context.strokeStyle = "white";
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

        // update this image's data with data from the canvas
        this.data = context.getImageData(0, 0, this.width, this.height).data;

        // continuously repaint the map, resulting in the smooth animation of the dot
        map.triggerRepaint();

        // return `true` to let the map know that the image was updated
        return true;
      }
    };
    await loadImages(images, function(loadedImages) {
      map.on("load", function() {
        map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });

        map.addImage("popup", loadedImages["popup"], {
          stretchX: [[25, 55], [85, 115]],
          stretchY: [[25, 100]],
          content: [25, 25, 115, 100],
          pixelRatio: 2
        });

        map.addSource("points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-5.0825, 37.5527853]
                },
                properties: {
                  "image-name": "popup",
                  name: "DevPC↓"
                }
              }
            ]
          }
        });
        map.addLayer({
          id: "points",
          type: "symbol",
          source: "points",
          layout: {
            "text-field": ["get", "name"],
            "icon-text-fit": "both",
            "icon-image": ["get", "image-name"],
            "icon-allow-overlap": true,
            "text-allow-overlap": true
          }
        });
      });
    });
  });
</script>

<style>
  .breadcrumb {
    border-radius: 0;
  }
  h2,
  #subtitulo {
    text-align: center;
  }
  :global(body) {
    padding: 0;
  }
  #map {
    height: 500px;
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
      <div id="map" />
    </div>
  </div>
</div>
