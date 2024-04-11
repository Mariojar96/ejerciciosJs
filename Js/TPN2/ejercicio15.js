const texto = (prompt("Ingrese un texto"));
let vocales = 0; 

for (let i = 0; i< texto.length; i++){
    const caracter = texto.at(i).toLowerCase;
    if(caracter === "a"||
    caracter === "e"||
    caracter === "i"||
    caracter === "o"||
    caracter === "u"){
        vocales++;
    }
}

console.log(`La cantidad de vocales son ${vocales}`);


