/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado.
Crea los métodos necesarios para permitir encender y apagar el auto.
Output:
objeto.encender();
objeto.apagar()
auto encendido
El auto se apagó*/


const auto = {
    color : "",
    marca : "",
    modelo : "", 
    encendido : false,



    estado: function () {
        if (this.encendido) {
            console.log("El auto está encendido");
        } else {
            console.log("El auto está apagado");
        }
    },
    asignarColor: function (color){
        this.color = color;
    },
    asignarMarca: function (marca){
        this.marca = marca;
    },
    asignarModelo: function (modelo){
        this.modelo = modelo;
    },
    informe: function (){
        console.log (`El Auto es ${this.marca} de color ${this.color} modelo ${this.modelo}`);
  
    },

};
let estado;
    do {
        estado = Number(prompt("Ingrese el estado del auto (0 para apagado, 1 para encendido):"));
        if (estado !== 0 && estado !== 1) {
         alert("Por favor, ingrese solo 0 o 1.");
     }
    } while (estado !== 0 && estado !== 1);

    if (estado === 1) {
        auto.encendido = true;
    }
   
    auto.asignarColor(prompt ("Ingrese color del auto"));
    auto.asignarMarca(prompt ("Ingrese Marca del auto"));
    auto.asignarModelo(prompt ("Ingrese Modelo del auto"));
    auto.estado();
    auto.informe();


