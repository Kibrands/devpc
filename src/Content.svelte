<script>
import {Route} from 'svelte-routing';
import Index from './Index.svelte';
import Contact from './Contact.svelte';
import Register from './Register.svelte';
import Forgot from './Forgot.svelte';
import Footer from './Footer.svelte';
</script>

<main id="main">
<Route path="/" component={Index} />
<Route path="/contact" component={Contact} />
<Route path="/register" component={Register} />
<Route path="/forgot" component={Forgot} />
<Footer />
<!-- Font Awesome JS -->
<script src="vendors/fontawesome-free-5.11.2-web/js/all.js"></script>
<!-- jQuery -->
<script src="vendors/bootstrap-4.4.0-dist/js/jquery-3.4.1.min.js"></script>
<!-- Popper.js -->
<script src="vendors/bootstrap-4.4.0-dist/js/popper.min.js"></script>
<!-- Bootstrap JS -->
<script src="vendors/bootstrap-4.4.0-dist/js/bootstrap.min.js"></script>
<!-- Legal Advice -->
<script src="js/legalAdvice.js"></script>
</main>