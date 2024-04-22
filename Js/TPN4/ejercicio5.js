/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/

class Persona {
  constructor(nombre, edad, sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;    
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
    this.DNI = this.generarDNI();
  }

  validarEdad(edad) {
    if (typeof edad !== 'number' || isNaN(edad) || edad < 0 || edad > 150) {
      console.log('Edad inválida. Se asignará el valor por defecto de 18.');
      return 18; 
    }
    return edad;
  }

  validarSexo(sexo) {
    if (sexo !== 'H' && sexo !== 'M') {
      console.log('Sexo inválido. Se asignará el valor por defecto de "H".');
      return 'H'; 
    }
    return sexo;
  }

  mostrarGeneración() {
    if (nacimiento >= 1994 && nacimiento <= 2010) {
      console.log(
        "Perteneces a la generación Z que tiene el rasgo característico de Irreverencia "
      );
    }
    if (nacimiento >= 1981 && nacimiento <= 1993) {
      console.log(
        "Perteneces a la generación Y que tiene el rasgo característico de Irreverencia "
      );
    }
    if (nacimiento >= 1969 && nacimiento <= 1980) {
      console.log(
        "Perteneces a la generación X que tiene el rasgo característico de Obseción al Éxito"
      );
    }
    if (nacimiento >= 1949 && nacimiento <= 1968) {
      console.log(
        "Perteneces a la generación Baby Boom que tiene el rasgo característico de Ambición "
      );
    }
    if (nacimiento >= 1930 && nacimiento <= 1948) {
      console.log(
        "Perteneces a la generación Silenciosa que tiene el rasgo característico de Austeridad "
      );
    }
  }

  esMayorDeEdad() {
    if (edad >= 18) {
      console.log("La persona ingresada es mayor de edad");
    } else {
      console.log("La persona ingresada es menor");
    }
  }
  mostrarDatos() {
    console.log(
      `Su nombre es ${this.nombre}, su edad es ${this.edad}, su documento es el ${this.DNI} de sexo ${this.sexo}, pesa ${this.peso}, mide ${this.altura} y nació el ${this.nacimiento}`
    );
  }

  generarDNI(){
    return Math.floor(Math.random() * 90000000) + 10000000;
  }
}

const nombre = prompt("Ingrese su nombre");
const edad = Number(prompt("Ingrese su edad"));
const sexo = prompt("Ingrese su sexo (H para hombre , M para mujer)");
const peso = parseFloat(prompt("Ingrese su peso"));
const altura = parseFloat(prompt("Ingrese su altura"));
const nacimiento = Number(prompt("Ingrese su año de nacimiento"));

const persona = new Persona(nombre, edad, sexo, peso, altura, nacimiento);
persona.mostrarGeneración();
persona.esMayorDeEdad();
persona.mostrarDatos();
