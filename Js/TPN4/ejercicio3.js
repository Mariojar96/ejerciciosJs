/*Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, 
mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/

class figura {
    
    constructor(largo, ancho){
        this.largo = largo;
        this.ancho = ancho;
    }
    
    modificar(){
    }
    medida () {
        console.log (`El largo es ${this.largo} y su ancho es ${this.ancho}`);

    }
    perimetro (){
        this.perimetro = 2 * (this.largo + this.ancho);
        console.log(`El perimetro del rectangulo es ${this.perimetro}`)
    }
    area (){
        this.area = this.largo * this.ancho;
        console.log (`El area del rectangulo es ${this.area}`);
    }

}

const L = Number (prompt ("Ingrese largo del rectangulo"));
const A = Number (prompt ("Ingrese ancho del rectangulo"));
const rectangulo = new figura (L , A);
rectangulo.modificar();
rectangulo.medida();
rectangulo.perimetro();
rectangulo.area();




