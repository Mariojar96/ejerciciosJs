let cadena = "";

do {
  let texto = prompt("Ingresar texto");

  if (texto === null) {
    break;
  }

  cadena += `-${texto}`;

  alert(`Ingresaste lo siguiente: ${texto}`);
} while (true);

alert(`Los textos que ingresaste fueron: ${cadena}`);