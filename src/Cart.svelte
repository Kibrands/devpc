<script>
  import { Link } from "svelte-routing";
  import { onMount, getContext } from "svelte";
  import { carts, logged, user } from "./store.js";

  import Button from "./Button.svelte";

  const URL = getContext("URL");
  let cart = {};
  let search = "";
  let category = "";
  let product = {};
  let amount = [];
  let amountSelected = 1;

  onMount(async () => {
    const response = await fetch(URL.carts + "user/" + user.data._id);
    const data = await response.json();
    $carts = await data;
  });

  async function getProductTitle(cart) {
    const resp = await fetch(URL.products + cart.productId);
    const data = await resp.json();
    product = await data;
    for (let i = 1; i <= (await product.stock); i++) {
      amount[i - 1] = i;
    }
  }
</script>

<div class="container">
  <br />
  <div class="row">
    {#each $carts as cart}
      <input type="hidden" value={getProductTitle(cart)} />
      <div class="card col-12">
        <div class="row">
          <div class="col-2">
            <img
              class="img-fluid border rounded my-2"
              width="200"
              src={product.image}
              alt={product.title} />
          </div>
          <div class="col-10">
            <h5>{product.title}</h5>
            <label for="amount">Cantidad</label>
            <select name="amount" id="amount" bind:value={amountSelected}>
              {#each amount as option}
                <option value={option}>{option}</option>
              {/each}
            </select>
            <Button type="deleteCart" document={cart} collection="carts" />
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
