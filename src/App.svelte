<script>
  import { setContext } from "svelte";
  import { Router } from "svelte-routing";
  import Nav from "./Nav.svelte";
  import Footer from "./Footer.svelte";
  export let name;
</script>

<style>

</style>

<header>
  <Router>
    <Nav />
  </Router>
</header>
<main id="main">
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <Footer />
  <!-- Font Awesome JS -->
  <script src="vendors/fontawesome-free-5.11.2-web/js/all.js">

  </script>
  <!-- jQuery -->
  <script src="vendors/bootstrap-4.4.0-dist/js/jquery-3.4.1.min.js">

  </script>
  <!-- Popper.js -->
  <script src="vendors/bootstrap-4.4.0-dist/js/popper.min.js">

  </script>
  <!-- Bootstrap JS -->
  <script src="vendors/bootstrap-4.4.0-dist/js/bootstrap.min.js">

  </script>
  <!-- Legal Advice -->
  <script src="js/legalAdvice.js">

  </script>
</main>
