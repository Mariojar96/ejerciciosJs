do {
    let entrada = prompt("Ingrese DNI sin puntos");
  
    if (entrada === null || entrada === "") {
      break;
    }
    let dni = parseInt(entrada);
    if (isNaN(dni)) {
      alert("Lo que ingresaste no es un numero, por favor ingrese nuevamente");
    } else {
      if (dni >= 0 && dni <= 99999999) {
        let resto = dni % 23;
        switch (resto) {
          case 0:
            alert("T");
            break;
          case 1:
            alert("R");
            break;
          case 2:
            alert("W");
            break;
          case 3:
            alert("A");
            break;
          case 4:
            alert("G");
            break;
          case 5:
            alert("M");
            break;
          case 6:
            alert("Y");
            break;
          case 7:
            alert("F");
            break;
          case 8:
            alert("P");
            break;
          case 9:
            alert("D");
            break;
          case 10:
            alert("X");
            break;
          case 11:
            alert("B");
            break;
          case 12:
            alert("N");
            break;
          case 13:
            alert("J");
            break;
          case 14:
            alert("Z");
            break;
          case 15:
            alert("S");
            break;
          case 16:
            alert("Q");
            break;
          case 17:
            alert("V");
            break;
          case 18:
            alert("H");
            break;
          case 19:
            alert("L");
            break;
          case 20:
            alert("C");
            break;
          case 21:
            alert("K");
            break;
          case 22:
            alert("E");
            break;
        }
      } else {
        alert("El numero ingresado no corresponde a un rango valido de dni");
      }
    }
  } while (true);
   