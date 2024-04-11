/*4- Escribir el código de una función a la que se pasa como parámetro un número 
entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

function numero(num){
    if (isNaN(num)) {
        console.log("El valor proporcionado no es un número");
    }else{
        if (num % 2 === 0 ){
            console.log("El número es par"); 
        } else {        
            console.log("El número es impar"); 
        }
    }
}
let num = Number(prompt ("Ingrese un número"));
let resultado = numero(num);
