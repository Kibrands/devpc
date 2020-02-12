<script>
    import { Link } from "svelte-routing";

    let user = { loggedIn: false };
    let visibility = "hidden";

	function toggle() {
        user.loggedIn = !user.loggedIn;
        if (visibility == "hidden") visibility = "";
        else visibility = "hidden";
	}
</script>

<style>

</style>

<header>
<div class="myLine"><br /></div>
</header>
<nav class="navbar navbar-expand-lg navbar-light bg-light px-5 py-0">
    <Link to="/">
        <div class="navbar-brand py-0">
            <img class="float-left logo" src="img/logo-transparente.png" width="150" alt="devpc icon">
        </div>
    </Link>
    <div class="float-left align-items-center ml-2">
        <div class="btn btn-dark"><i class="fas fa-bars"></i></div>
    </div>
    <div class="form-inline mt-0 mt-md-0">
            
            {#if user.loggedIn}
            <div style="visibility: {visibility}">
            Carrito
            </div>
            <button class="btn btn-outline-dark my-0 ml-2 my-sm-0" id="logIn"
                 on:click={toggle}>
                Log out
            </button>
            {/if}

            {#if !user.loggedIn}
            <button class="btn btn-outline-dark my-0 ml-2 my-sm-0" id="logIn"
                 on:click={toggle}>
                Log in
            </button>
            {/if}
    </div>
</nav>