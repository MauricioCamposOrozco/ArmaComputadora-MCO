var formulario = document.querySelector("form");
var resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    var total = 0;

    var gabinete = document.getElementById("gabinete").value;
    var procesador = document.getElementById("procesador").value;
    var discoduro = document.getElementById("discoduro").value;
    var memoria = document.getElementById("memoria").value;

    total = total + Number(gabinete);
    total = total + Number(procesador);
    total = total + Number(disco);
    total = total + Number(memoria);

    var accesoriosSeleccionados = document.querySelectorAll(".accesorios input:checked")
    var cantidad = accesoriosSeleccionados.length;

    total = total + (cantidad * 100);

    resultado.textContent = "Total: $" + total;

    });