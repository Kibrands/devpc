<script>
  import { onMount, getContext } from "svelte";
  import { writable } from "svelte/store"; 
  import Swal from 'sweetalert2';

  import {
    jsonData,
    cartData,
    visibility,
    logged,
    user,
    loginData,
    cartCount,
    carts
  } from "./store.js";
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
    logged.set(!$logged);
    if ($visibility == "hidden") visibility.set("");
    else visibility.set("hidden");
  }

  function clearData() {
    loginData.nick = "";
    loginData.password = "";
    window.document.getElementById("loginNick").value = "";
    window.document.getElementById("loginPassword").value = "";
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
        classes = "btn btn-outline-light my-0 ml-2 my-sm-0 btn-logout";
        break;
      case "deleteCart":
        handler = deleteCart;
        classes = "btn btn-dark my-0 ml-2 my-sm-0 btn-deleteCart";
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

  async function getCount() {
    let count = 0;
    const response = await fetch(URL.carts + "user/" + user.data._id);
    const data = await response.json();
    data.forEach(element => {
      ++count;
    });
    $cartCount = await count;
  }

  function deleteCart() {
    fetch(url + document._id, {
      method: "DELETE"
    });
    $carts = fetch(URL.carts);
    getCount();
  }

  function addToCart() {
    $cartData = { userId: user.data._id, productId: document._id, amount: 1 };
    console.log(url);
    if (
      Object.keys($cartData).length > 1 &&
      Object.values($cartData).every(x => x !== undefined && x != "")
    ) {
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify($cartData)
      })
        .then(res => res.json())
        .then(data => {})
        .catch(err => console.log(err));
    }
    getCount();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se ha añadido al carro',
      showConfirmButton: false,
      timer: 1500
    });
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
        .catch(err => console.log(err));
    }
    getCount();
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
          user.data = data;
          getCount();
          toggle();
          clearData();
        } else {
          alert("Datos incorrectos");
        }
      })
      .catch(err => console.log(err));
  }

  function logout() {
    user.data = {};
    toggle();
    window.location.href = "/";
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

  .btn-deleteCart::after {
    content: "Eliminar";
  }
</style>

<button
  data-dismiss={dataDismiss}
  type={btnType}
  class={classes}
  on:click={handler} />
