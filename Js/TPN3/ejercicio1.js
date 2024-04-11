/*Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla en forma de lista los doce nombres del arreglo*/

var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

console.log("Los doce meses del año son:");
for (var i = 0; i < meses.length; i++) {
  console.log(i + 1 + ". " + meses[i]);
}
