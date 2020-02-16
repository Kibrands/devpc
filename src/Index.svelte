<script>
  import { Link } from "svelte-routing";
  import { onMount, getContext } from "svelte";
  import { jsonData } from "./store.js";

  import Search from "./Search.svelte";
  import Product from './Product.svelte';
  import Button from './Button.svelte';

  const URL = getContext("URL");
  let search = "";
  let product = {};

  onMount(async () => {
    const response = await fetch(URL.products);
    const data = await response.json();
    $jsonData = data;
  });

  $: regex = new RegExp(search, "i");
  $: dataResponse = search 
    ? $jsonData.filter(item => regex.test(item.title))
    : $jsonData;
</script>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page"><i class="fas fa-home"></i> Inicio</li>
  </ol>
</nav>

<div class="container">
  <Search bind:search />
  
  <div class="row">
    {#each dataResponse as product}
      <Product {product}>
        <div style="text-align: right">
          <Button document={product} type="addToCart" collection="products" />
        </div>
      </Product>
    {/each}
  </div>
</div>
