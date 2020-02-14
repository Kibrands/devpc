<script>
  import { onMount, getContext } from "svelte";
  import { jsonData } from "./store.js";
  import { md5 } from "./md5.js";

  export let type = "addToCart";
  export let collection = "products";
  export let document = {};

  const toggle = getContext("toggle");

  let btnType = "";
  let handler = () => {};
  let classes = "";
  let url = "";

  const URL = getContext("URL");
  const LOGIN_DATA = getContext("loginData");
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
    document = LOGIN_DATA;
    console.log(document.nick);
    fetch(URL.users + document.nick, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        if (
          data.nick == document.nick &&
          data.password == md5(document.password)
        ) {
          toggle();
        } else {
          alert("Datos incorrectos");
        }
      })
      .catch(err => console.log(err));
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
</style>

<button type={btnType} class={classes} on:click={handler} />
