<script>
    import { Link } from "svelte-routing";
    import App from './App.svelte';

    let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>
<style></style>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5">
    <Link to="/">
        <div class="navbar-brand">
            <img class="float-left" src="img/favicon.png" width="60" alt="devpc icon">
            <div class="float-left align-items-center ml-2">
                <p>DevPC<br><span class="lower">Tu tienda de inform&aacute;tica</span></p>
            </div>
        </div>
    </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <Link to="/">
                    <div class="nav-item nav-link">
                        <i class="fas fa-home"></i>&nbsp;Inicio
                    </div>
                </Link>
            </li>
            <li class="nav-item">
                <Link to="/contact">
                    <div class="nav-item nav-link">
                        <i class="fas fa-headset"></i>&nbsp;Contacto
                    </div>
                </Link>
            </li>
        </ul>
        <div class="form-inline mt-2 mt-md-0">
            <button class="btn btn-outline-light my-2 ml-2 my-sm-0" id="logIn"
                 on:click={toggle}>
            {#if user.loggedIn}
                Log out
            {/if}

            {#if !user.loggedIn}
                Log in
            {/if}
            </button>
        </div>
    </div>
</nav>