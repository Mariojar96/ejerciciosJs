let numero = parseInt(prompt("Ingrese un numero entero que no supere 50"));


if (isNaN(numero)) {
  alert("Ingresa un número válido");
} else {
  if (numero <= 50) {
    document.write("PIRÁMIDE INVERSA<br />");
    for (let i = numero; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        document.write(i);
      }
      document.write("<br />");
    }
  } else {
    alert("El numero no corresponde a un rango válido");
  }
} 