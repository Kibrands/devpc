<script>
import { Link } from "svelte-routing";
</script>

<style>

</style>

<div class="modal fade" id="legalAdvice" tabindex="-1" role="dialog" aria-labelledby="legalAdvice"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="legalAdvice">Aviso Legal</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img src="img/favicon.png" width="80" class="float-left" alt="Logo DevPC">
                    <p class="text-right">
                        <b id="legalAdviceContact"></b>
                    </p>
                    <hr>
                    <p id="legalAdviceContent"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
</div>
<footer
    class="footer w-100 card-footer text-center py-0 px-5 text-white">
    DevPC 2020 &copy; |
    <a href="#footer" data-toggle="modal" data-target="#legalAdvice" id="avisoLegal">
    Aviso Legal y Pol&iacute;tica de Privacidad
    </a>
    <Link to="/contact">
        <div class="nav-item nav-link" style="color: white">
            <i class="fas fa-headset"></i>&nbsp;Contacto
        </div>
    </Link>
</footer>