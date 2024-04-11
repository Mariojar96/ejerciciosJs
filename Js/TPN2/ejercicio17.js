var texto = prompt("Por favor, ingresa un texto:");

function encontrarPrimeraVocal(texto) {
    texto = texto.toLowerCase();    
    
    var vocales = ['a', 'e', 'i', 'o', 'u'];
    
    
    for (var i = 0; i < texto.length; i++) {        
        if (vocales.includes(texto[i])) {            
            return i + 1;
        }
    }   
    return -1;
}
var posicion = encontrarPrimeraVocal(texto);
if (posicion !== -1) {
    alert("La posición de la primera vocal es: " + posicion);
} else {
    alert("No se encontró ninguna vocal en el texto ingresado.");
}