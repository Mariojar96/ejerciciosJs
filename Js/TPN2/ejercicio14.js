let cadena = (prompt ("Ingrese una frase: "));
let resultado = '';

for (let i = 0; i < cadena.length; i++){
    const caracter = cadena.at(i);
    resultado = resultado + '-' + caracter;
}
console.log(resultado);