$(document).ready(function () {
    var aviso = `
    El Ayuntamiento de Écija, a través del dominio ecija.es facilita información de interés general de la ciudad de Écija y, en especial, información y gestiones propias de la organización municipal.
    <br>
    La información facilitada es la vigente en el momento de su publicación.
    <br>
    El Ayuntamiento de Écija procura que esta información sea exacta y precisa, y procede a su actualización con la máxima celeridad posible, tratando de evitar errores y corrigiéndolos tan pronto como los detecta. No obstante, el Ayuntamiento de Écija no puede garantizar la inexistencia de errores ni que el contenido de la información se encuentre permanentemente actualizado.
    <br>
    El Ayuntamiento de Écija podrá efectuar, en cualquier momento y sin necesidad de previo aviso, modificaciones, supresiones o actualizaciones de la información contenida en ecija.es o en su configuración o presentación.
    <br>
    El acceso al dominio ecija.es, así como el uso de la información que contiene, son de la exclusiva responsabilidad del usuario. El Ayuntamiento de Écija no es responsable de ningún perjuicio que pudiera derivarse de esos hechos, ni tampoco puede garantizar que el acceso no se vea interrumpido o que el contenido o software al que pueda accederse esté libre de error o de causar daño.
    <br>
    La información proporcionada en respuesta a cualquier consulta o petición de información tiene carácter meramente orientativo y en ningún caso resultará vinculante para la resolución de los procedimientos administrativos, los cuales se hallan estrictamente sujetos a las normas legales o reglamentarias que les sean de aplicación.
    <br>
    En ecija.es se incluyen enlaces a páginas de sitios web de terceros, fundamentalmente de otras Administraciones públicas, empresas locales y asociaciones de la ciudad, que se considera pueden ser de interés para los usuarios. El Ayuntamiento de Écija no asume ninguna responsabilidad derivada de las conexiones o los contenidos de esos enlaces.
    <br>
    El portal ecija.es, sus diseños gráficos y las informaciones y códigos que contiene son de titularidad del Ayuntamiento de Écija, salvo expresa indicación de una titularidad diferente, y están protegidos por la legislación sobre propiedad intelectual.
    <br>
    Los contenidos de este dominio pueden ser descargados en el terminal del usuario siempre que sea para su uso privado y sin ningún fin comercial, pero no pueden ser objeto de explotación, reproducción, distribución, modificación, comunicación pública, cesión o transformación, salvo autorización específica y expresa.
    `;
    var contact = `
    Teléfono: 954 024 209<br>
    c/. San Francisco, 11 - Planta Baja<br>
    Ayuntamiento de Écija<br>
    `;
    $('#legalAdviceContact').html(contact);
    $('#legalAdviceContent').html(aviso);
});

