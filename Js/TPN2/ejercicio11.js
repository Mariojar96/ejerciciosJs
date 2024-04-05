let maxEdad = 0;
let nombreMayor = "";

for (let i = 0; i < 3; i++) {
    let nombre = prompt("Ingrese el nombre " + (i + 1) + ":");
    if (nombre === null) {
        alert("Ha cancelado la entrada de datos.");
        break;
    }
    
    let edad = parseInt(prompt("Ingrese la edad de " + nombre + ":"));
    if (isNaN(edad) || edad < 1 || edad > 100) {
        alert("La edad ingresada no es válida. Debe ser un número entre 1 y 100.");
        i--;
        continue;
    }

    if (edad > maxEdad) {
        maxEdad = edad;
        nombreMayor = nombre;
    }
}

if (nombreMayor !== "") {
    alert("El mayor es: " + nombreMayor);
}