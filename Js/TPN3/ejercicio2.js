/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y 
almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado,
 luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/ 

var ciudades = [];

while (true) {
  var ciudad = prompt(
    "Por favor, ingresa el nombre de una ciudad (o presiona Cancelar para finalizar):"
  );

  if (ciudad === null) {
    break;
  } else if (ciudad.trim() !== "") {
    ciudades.push(ciudad);
  }
}

console.log("Arreglo de ciudades:", ciudades);

console.log("Longitud del arreglo:", ciudades.length);

document.write("<p>Primera ciudad: " + ciudades[0] + "</p>");
document.write("<p>Tercera ciudad: " + ciudades[2] + "</p>");
document.write("<p>Última ciudad: " + ciudades[ciudades.length - 1] + "</p>");

ciudades.push("París");

console.log("Elemento en la segunda posición:", ciudades[1]);

ciudades[1] = "Barcelona";

console.log("Arreglo actualizado:", ciudades);
