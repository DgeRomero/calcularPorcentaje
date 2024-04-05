let precio = document.getElementById("texto");
let btnCalcular = document.getElementById("btnCalcular");
let resultado = document.getElementById("resultado");
let porcentaje = document.getElementById("porcentaje");

function calcularPorcentaje(){
    let monto = precio.value;
    let adicional = porcentaje.value;
    let subtotal = monto*adicional/100;
    let total = Number(monto)+ Number(subtotal);
    resultado.innerHTML = "Lo que tengo que cobrar es: $" + total;
}