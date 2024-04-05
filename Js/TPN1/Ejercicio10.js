N= parseInt (prompt ("Ingrese un número"));

if (N % 2 === 0) {
  document.write('El numero es divisible por 2');
} else if (N % 3 === 0) {
  document.write('El numero es divisible por 3');
} else if (N % 5 === 0) {
  document.write('El numero es divisible por 5');
} else if (N % 7 === 0) {
  document.write('El numero es divisible por 7');
} else {
  document.write('El numero no es divisible por 2, 3, 5 o 7');
}