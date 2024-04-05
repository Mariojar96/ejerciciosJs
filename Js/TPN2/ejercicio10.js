let filas = parseInt(prompt("Ingrese cantidad dde filas"));
let columnas = parseInt(prompt("Ingrese cantidadd de columnas"));

let celdas = filas * columnas;

document.write("<table border='1'>");

let numero = celdas;

for (let i = 0; i < filas; i++) {
  document.write("<tr>");

  for (let j = 0; j < columnas; j++) {
    document.write("<td>" + numero + "</td>");
    numero--;
  }

  document.write("</tr>");
}

document.write("</table>");