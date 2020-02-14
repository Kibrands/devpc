<script>
import Button from './Button.svelte';
    export let product = {};
</script>

<div class="card col-4" on:click>
    <img src="{product.image}" alt="{product._id}" class="img-fluid"/>
    <h5>{product.title}</h5>
    <span><b>Categor&iacute;a:</b> {product.category}</span>
    <span>{product.price} € -{product.dto}%</span>
    <slot />
</div>