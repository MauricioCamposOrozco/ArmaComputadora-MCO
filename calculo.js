var formulario = document.querySelector("form");

var resultado = document.createElement("div");
resultado.id = "resultado";
document.body.appendChild(resultado);
    
formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    var total = 0;

    var gabinete = document.getElementById("gabinete").value;
    var procesador = document.getElementById("procesador").value;
    var disco = document.getElementById("discoduro").value;
    var memoria = document.getElementById("memoria").value;
    var monitor = document.getElementById("monitor").value;

    total = total + Number(gabinete);
    total = total + Number(procesador);
    total = total + Number(disco);
    total = total + Number(memoria);
    total = total + Number(monitor);

    var accesoriosSeleccionados = document.querySelectorAll(".accesorios input:checked");
    var cantidad = accesoriosSeleccionados.length;

    total = total + (cantidad * 100);

    resultado.textContent = "Total: $" + total;

});