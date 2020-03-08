<script>
  import { Link } from "svelte-routing";
  import { onMount, getContext } from "svelte";
  import { carts, logged, user } from "./store.js";

  import Button from "./Button.svelte";

  const URL = getContext("URL");
  let cart = {};
  let search = "";
  let category = "";
  let product = [{ title: "a", image: "a" }];
  let totalAmount = 0;
  let payment = "";

  function isIncluded(carts, data) {
    let inBool = false;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].productId == data.productId) inBool = true;
    }
    return inBool;
  }

  function prepare(data) {
    $carts = [];
    for (let i = 0; i < data.length; i++) {
      if (isIncluded($carts, data[i])) {
        $carts.forEach(element => {
          if (element.productId == data[i].productId) {
            element.amount++;
          }
        });
      } else {
        if ($carts.length <= 0) {
          $carts[0] = data[i];
        } else {
          $carts[$carts.length] = data[i];
        }
      }
    }
  }

  onMount(async () => {
    if (!$logged) user.data._id = "";
    totalAmount = 0;
    const response = await fetch(URL.carts + "user/" + user.data._id);
    const data = await response.json();
    await prepare(data);
  });

  async function getProductTitle(cart, i) {
    const resp = await fetch(URL.products + cart.productId);
    const data = await resp.json();
    product[i] = await data;
    if (i == 0) totalAmount = 0;
    totalAmount += product[i].price * cart.amount;
    return product[i];
  }
</script>

<div class="container mb-4">
  <br />
  {#if $logged}
    <div class="alert alert-success" role="alert">
    Por compras superiores a <a href="#" class="alert-link">30€</a> el env&iacute;o sale gratis.
    </div>
    <div class="row">
      {#each $carts as cart, i}
        {#await getProductTitle(cart, i) then prod}
          <div
            class="card col-12 mb-3"
            style="background-color: rgb(236, 236, 236); border: none">
            <div class="row">
              <div class="col-2">
                <img
                  class="img-fluid border rounded my-2"
                  width="200"
                  src={prod.image}
                  alt={prod.title} />
              </div>
              <div class="col-6">
                <h5>{prod.title}</h5>
                <label for="amountSelected">Cantidad seleccionada</label>
                <input type="number" bind:value={$carts[i].amount} />
                {#if cart.amount > prod.stock}
                  <div class="alert alert-danger" role="alert">
                    Actualmente no tenemos más de {prod.stock} unidad
                    {#if prod.stock > 1}es{/if}
                    de este producto . Por favor, elija un número igual o
                    inferior.
                  </div>
                {/if}
                <p>
                  Precio x 1:
                  <b>{prod.price} &euro;</b>
                </p>
                {#if cart.amount > 1}
                  <p>
                    Precio x {cart.amount}:
                    <b>
                      {parseFloat(prod.price * cart.amount).toFixed(2)} &euro;
                    </b>
                  </p>
                {/if}
                <Button type="deleteCart" document={cart} collection="carts" />
              </div>
            </div>
          </div>
        {/await}
      {/each}
      <hr />
    </div>
    <hr />
    <div class="row">
      <div
        class="card col-6"
        style="background-color: rgb(236, 236, 236); border: none">
        <div class="card-header" style="background-color: rgb(236, 236, 236)">
          <h4>Métodos de pago posibles</h4>
        </div>
        <div class="card-body">
          <img
            src="img/metodosPago.png"
            width="200px"
            alt="M&eacute;todos de pago" />
        </div>
      </div>
      <div
        class="card col-6"
        style="background-color: rgb(236, 236, 236); border: none">
        <div class="card-header" style="background-color: rgb(236, 236, 236)">
          <h4 style="text-align:center;">Pedido</h4>
        </div>
        <div class="card-body">
          <input
            id="payment"
            type="text"
            class="form-control"
            bind:value={payment}
            required />
          <br />
          <h3 class="w-100">
            Total: {parseFloat(totalAmount).toFixed(2)} &euro;
          </h3>
          <br />
          <Button type="purchase" collection="purchases" document={payment} />
        </div>
      </div>
    </div>
  {/if}
  {#if !$logged}
    <h2>Oops, inicia sesión para entrar aquí.</h2>
  {/if}
</div>
