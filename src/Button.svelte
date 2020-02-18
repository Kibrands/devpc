<script>
  import { onMount, getContext } from "svelte";
  import {writable} from 'svelte/store';
  import { jsonData, visibility, logged, user } from "./store.js";
  import { md5 } from "./md5.js";

  export let type = "addToCart";
  export let collection = "products";
  export let document = {};
  export let dataDismiss = "";

  let btnType = "";
  let handler = () => {};
  let classes = "";
  let url = "";

  function toggle() {
    $logged = !$logged;
    if ($visibility == "hidden") $visibility = writable("");
    else $visibility = writable("hidden");
  }

  const URL = getContext("URL");
  onMount(() => {
    switch (type) {
      case "addToCart":
        handler = addToCart;
        classes = "btn btn-dark btn-addToCart";
        break;
      case "register":
        handler = register;
        classes = "btn btn-primary btn-register";
        btnType = "submit";
        break;
      case "login":
        handler = login;
        classes = "btn btn-primary pull-right btn-login";
        break;
      case "logout":
        handler = logout;
        classes = "btn btn-outline-dark my-0 ml-2 my-sm-0 btn-logout";
        break;
      default:
    }
    switch (collection) {
      case "products":
        url = URL.products;
        break;
      case "users":
        url = URL.users;
        break;
      case "carts":
        url = URL.carts;
        break;
      case "purchases":
        url = URL.purchases;
        break;
      default:
    }
  });

  function addToCart() {
    console.log(document);
  }

  function register() {
    window.document
      .getElementById("registerForm")
      .addEventListener("click", function(event) {
        event.preventDefault();
      });
    document.password = md5(document.password);
    if (
      Object.keys(document).length > 1 &&
      Object.values(document).every(x => x !== undefined && x != "")
    ) {
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(document)
      })
        .then(res => res.json())
        .then(data => {
          $jsonData = [...$jsonData, data];
          window.location.href = "/";
        })
        .catch(err => ko());
    }
  }

  function login() {
    fetch(URL.users + document.nick, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        if (
          data.nick == document.nick &&
          data.password == md5(document.password)
        ) {
          $user = writable(data);
          console.log(user);
          
          toggle();
        } else {
          alert("Datos incorrectos");
        }
      })
      .catch(err => console.log(err));
  }

  function logout() {
    $user = writable("");
    toggle();
  }
</script>

<style>
  .btn-addToCart::after {
    content: "Añadir al carrito";
  }

  .btn-register::after {
    content: "Registrarse";
  }

  .btn-login::after {
    content: "Login";
  }

  .btn-logout::after {
    content: "Logout";
  }
</style>

<button
  data-dismiss={dataDismiss}
  type={btnType}
  class={classes}
  on:click={handler} />
