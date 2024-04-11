/*Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y 
mostrar solo los resultados del 1 al 10 del número elegido por el usuario*/

function tablaMultiplicar(numero) {
    console.log("Tabla de multiplicar del " + numero + ":");
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}
var numeroUsuario = parseInt(prompt("Ingrese un número"));
if (isNaN(numeroUsuario)) {
    console.log("Ingrese un número válido.");
} else {   
    tablaMultiplicar(numeroUsuario);
}