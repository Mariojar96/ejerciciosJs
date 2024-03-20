N= parseInt (prompt ("Ingrese un número"));

document.write('Numero ingresado: ', N);

if (N % 2 === 0 , N % 3 === 0 , N % 5 === 0 || N % 7 === 0) {
  if (N % 2 === 0) {
    document.write('<br>El numero es divisible por 2');
  }
  if (N % 3 === 0) {
    document.write('<br>El numero es divisible por 3');
  }
  if (N % 5 === 0) {
    document.write('<br>El numero es divisible por 5');
  }
  if (N % 7 === 0) {
    document.write('<br>El numero es divisible por 7');
  }
} else {
  document.write('<br>El numero no es divisible por 2, 3, 5 o 7');
}