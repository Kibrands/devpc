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
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="form-inline mt-2 mt-md-0">
            
            {#if user.loggedIn}
            <div style="visibility: {visibility}">
            Carrito
            </div>
            <button class="btn btn-outline-dark my-2 ml-2 my-sm-0" id="logIn"
                 on:click={toggle}>
                Log out
            </button>
            {/if}

            {#if !user.loggedIn}
            <button class="btn btn-outline-dark my-2 ml-2 my-sm-0" id="logIn"
                 on:click={toggle}>
                Log in
            </button>
            {/if}
        </div>
    </div>
</nav>