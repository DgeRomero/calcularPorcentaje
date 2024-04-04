let precio = document.getElementById("texto");
let btnCalcular = document.getElementById("btnCalcular");
let resultado = document.getElementById("resultado");

function calcularPorcentaje(){
    let monto = precio.value;
    resultado.innerHTML = "Lo que tengo que cobrar es: $" + monto*1.4;
}