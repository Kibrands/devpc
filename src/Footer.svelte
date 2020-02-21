<script>
  import { Link } from "svelte-routing";
</script>

<style>
  #footer {
    z-index: 3;
  }
</style>

<div
  class="modal fade"
  id="legalAdvice"
  tabindex="-1"
  role="dialog"
  aria-labelledby="legalAdvice"
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="legalAdvice">Aviso Legal</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Cerrar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img
          src="img/favicon.png"
          width="80"
          class="float-left"
          alt="Logo DevPC" />
        <p class="text-right">
          <b id="legalAdviceContact" />
        </p>
        <hr />
        <p id="legalAdviceContent" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Cerrar
        </button>
      </div>
    </div>
  </div>
</div>
<footer
  id="footer"
  class="footer w-100 card-footer text-center py-0 pb-4 px-5 text-white">
  DevPC 2020 &copy; |
  <a
    href="#footer"
    data-toggle="modal"
    data-target="#legalAdvice"
    id="avisoLegal">
    Aviso Legal y Pol&iacute;tica de Privacidad
  </a>
  |
  <a href="#contacto" id="contacto">
    <Link to="/contact">Contacto</Link>
  </a>
</footer>
