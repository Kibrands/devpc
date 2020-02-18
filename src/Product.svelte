<script>
  import Button from "./Button.svelte";
  export let product = {};

  let pvp =
    product.dto > 0 ? (product.price * product.dto) / 100 : product.price;
</script>

<style>
  .product {
    z-index: 0;
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

<div class="card col-4 product" on:click>
  <img src={product.image} alt={product._id} class="img-fluid" />
  <h5>{product.title}</h5>
  <div class="prices">
    <b>Precio:</b>
    <span id="pvp" class="ml-1">{pvp}</span>
    {#if product.dto > 0}
      <div id="dto" class="p-2 ml-3">{product.dto}</div>
    {/if}
  </div>
  <div class="pb-4">
    <slot />
  </div>
</div>
