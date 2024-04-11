function calcularPerimetroRectangulo(base, altura) {
    return 2 * (base + altura);
}

var base = Number(prompt("Ingresa la longitud de la base del rectángulo:"));
var altura = Number(prompt("Ingresa la altura del rectángulo:"));


if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
    console.log("Por favor, ingresa valores válidos para la base y la altura del rectángulo.");
} else {    
    var perimetro = calcularPerimetroRectangulo(base, altura);
    console.log("El perímetro del rectángulo es: " + perimetro);
}