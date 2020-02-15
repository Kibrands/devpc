<script>
  import { onMount, getContext } from "svelte";
  import { jsonData } from "./store.js";
  import { md5 } from "./md5.js";

  export let type = "addToCart";
  export let collection = "products";
  export let document = {};

  let btnType = "";
  let handler = () => {};
  let classes = "";
  let url = "";

  let user = getContext("user");

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
        classes = "btn btn-outline-dark my-0 ml-2 my-sm-0";
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
          console.log(document.nick + " Loged In");
          user.loggedIn = true;
        } else {
          alert("Datos incorrectos");
        }
      })
      .catch(err => console.log(err));
  }

  function logout() {

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
