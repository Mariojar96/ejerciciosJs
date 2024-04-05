let suma = 0;
do {
  let entrada = prompt("Ingresa un numero");

  if (entrada === null || entrada === "") {
    break;
  }
  let numero = parseFloat(entrada);
  if (isNaN(numero)) {
    alert("Lo que ingresaste no es un numero");
  } else {
    suma += numero;
  }
} while (true);

alert(`La suma total de los numeros ingresados es: ${suma}`);