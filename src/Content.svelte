<script>
  import { Route } from "svelte-routing";
  import Index from "./Index.svelte";
  import Contact from "./Contact.svelte";
  import Register from "./Register.svelte";
  import Forgot from "./Forgot.svelte";
  import Footer from "./Footer.svelte";
  import Cart from "./Cart.svelte";
</script>

<main id="main">
  <Route path="/" component={Index} />
  <Route path="/contact" component={Contact} />
  <Route path="/register" component={Register} />
  <Route path="/forgot" component={Forgot} />
  <Route path="/cart" component={Cart} />
  <Footer />
  <!-- Legal Advice -->
  <script src="js/legalAdvice.js">

  </script>
</main>
