var cadenaOriginal = prompt("Por favor, ingresa una cadena de texto:");


function invertirCadena(cadena) {
    var cadenaInvertida = "";
    for (var i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}

var cadenaInvertida = invertirCadena(cadenaOriginal);

alert("La cadena invertida es: " + cadenaInvertida);