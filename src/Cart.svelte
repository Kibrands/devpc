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

  function isIncluded(carts, data) {
    let inBool = false;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].productId == data.productId) inBool = true;
    }
    return inBool;
  }

  function prepare(data) {
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
    const response = await fetch(URL.carts + "user/" + user.data._id);
    const data = await response.json();
    await prepare(data);
  });

  async function getProductTitle(cart, i) {
    const resp = await fetch(URL.products + cart.productId);
    const data = await resp.json();
    product[i] = await data;
    return product[i];
  }
</script>

<div class="container">
  <br />
  <div class="row">
    {#each $carts as cart, i}
      {#await getProductTitle(cart, i) then prod}
        <div class="card col-12">
          <div class="row">
            <div class="col-2">
              <img
                class="img-fluid border rounded my-2"
                width="200"
                src={prod.image}
                alt={prod.title} />
            </div>
            <div class="col-10">
              <h5>{prod.title}</h5>
              <label for="amountSelected">Cantidad seleccionada</label>
              <input type="number" value={cart.amount} />
              <p>Precio x 1: <b>{prod.price} &euro;</b></p>
              {#if cart.amount > 1}
                <p>Precio x {cart.amount}: <b>{prod.price * cart.amount} &euro;</b></p>
              {/if}
              <Button type="deleteCart" document={cart} collection="carts" />
            </div>
          </div>
        </div>
      {/await}
    {/each}
  </div>
</div>
