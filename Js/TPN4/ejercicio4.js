/*4- Escribe una clase Producto para crear objetos. Estos objetos, 
deben presentar las propiedades código, nombre y precio, además del método imprime datos, 
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla 
los valores de los tres objetos instanciados.*/

class Producto{

    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimeDatos (){
        console.log (`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }

}

function ingresarProducto(){
    let codigo =  prompt ("Ingrese el código del producto");
    let nombre =  prompt ("Ingrese el nombre del producto");
    let precio = parseFloat (prompt ("Ingrese el precio del producto"));

    while (isNaN(precio) || precio <= 0) {
        precio = parseFloat(prompt("Precio inválido. Por favor ingrese un precio válido:"));
      } 
      return new Producto (codigo, nombre, precio);
}

const producto1 = ingresarProducto();
const producto2 = ingresarProducto();
const producto3 = ingresarProducto();

const arrayProductos = [producto1, producto2, producto3];

arrayProductos.forEach(producto => {
    producto.imprimeDatos();
  });



