<script>
  import Button from "./Button.svelte";

  export let product = {};

  function getPVP(product) {
    let pvp =
      product.dto > 0
        ? product.price - (product.price * product.dto) / 100
        : product.price;
    return pvp;
  }
</script>

<style>
  .product {
    z-index: 0;
  }

  #pvp {
    font-size: 1.2em;
  }

  #dto {
    color: white;
    border-radius: 5px;
    background-color: rgb(83, 175, 211);
    text-align: center;
    width: 50px;
  }

  #pvp::after {
    content: " €";
  }

  #dto::after {
    content: "%";
  }

  .prices {
    display: inline-flex;
    align-items: center;
  }
</style>

<div
  class="card col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-2 product"
  on:click>
  <img src={product.image} alt={product._id} class="img-fluid" />
  <h5>{product.title}</h5>
  <hr />
  <div class="prices row pb-4">
    <div class="col-4">
      <b>Precio:</b>
      <br />
<<<<<<< HEAD
      <span id="pvp" class="ml-1">{pvp}</span>
=======
      {#await getPVP(product) then pvp}
        <span id="pvp" class="ml-1">{parseFloat(pvp).toFixed(2)}</span>
      {/await}
>>>>>>> d926ea069abadf6b85dee7dcb67e490b08b7a047
    </div>
    <div class="col-2">
      {#if product.dto > 0}
        <div id="dto" class="p-2 ml-3">{product.dto}</div>
      {/if}
    </div>
    <div class="col-6">
      <div class="float-right">
        <slot />
      </div>
    </div>
  </div>
</div>
