<script>
import Button from './Button.svelte';
    export let product = {};
</script>

<div class="card col-4" on:click>
    <h4>{product.title}</h4>
    <img src="{product.image}" alt="{product._id}" class="img-fluid"/>
    <span>{product.price} € -{product.dto}%</span>
    <slot />
</div>