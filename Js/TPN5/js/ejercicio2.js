/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/

class Persona {
  constructor(nombre, edad, sexo, peso, altura, nacimiento, DNI) {
    this.nombre = nombre;
    this.edad = edad;    
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
    this.DNI = DNI;   
    this.generacion = this.mostrarGeneracion(); 
    this.mayor = this.esMayorDeEdad();
    
  }

  validarEdad(edad) {
    if (typeof edad !== 'number' || isNaN(edad) || edad < 0 || edad > 150) {
      console.log('Edad inválida. Se asignará el valor por defecto de 18.');
      return 18; 
    }
    return edad;
  }

  validarDNI(DNI) {
    if (typeof DNI !== 'number' || isNaN(DNI) || DNI < 0 || edad > 99999999) {
      console.log('Documento inválido. Se asignará el valor por defecto de 1.');
      return 1; 
    }
    return DNI;
  }

  validarSexo(sexo) {
    if (sexo !== 'H' && sexo !== 'M') {
      console.log('Sexo inválido. Se asignará el valor por defecto de "H".');
      return 'H'; 
    }
    return sexo;
  }

  mostrarGeneracion() {    
    let generacion = '';
    if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
    generacion = "Perteneces a la generación Z que tiene el rasgo característico de Irreverencia ";
      
    }
    else if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
      generacion = "Perteneces a la generación Y que tiene el rasgo característico de Irreverencia ";
      
    }
    else if (this.nacimiento >= 1969 && this.nacimiento <= 1980) {
      generacion = "Perteneces a la generación X que tiene el rasgo característico de Obseción al Éxito";
      
    }
    else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
      generacion ="Perteneces a la generación Baby Boom que tiene el rasgo característico de Ambición ";
      
    }
    else if (this.nacimiento >= 1930 && this.nacimiento <= 1948) {
      generacion = "Perteneces a la generación Silenciosa que tiene el rasgo característico de Austeridad ";
      
    }else {
      generacion = "No se pudo determinar";
    }
    return generacion;
  }

  esMayorDeEdad() {
    let mayor = '';
    if (this.edad >= 18) {
      mayor = "La persona ingresada es mayor de edad";
    } else {
      mayor = "La persona ingresada es menor";
    }
    return mayor; 
  }
}

const personaForm = document.getElementById('personaForm');
const resultadoDiv = document.getElementById('resultado');

personaForm.addEventListener('submit', function(event) {
  event.preventDefault();

  
  const nombre = document.getElementById('nombre').value;
  const edad = parseInt(document.getElementById('edad').value);
  const sexo = document.getElementById('sexo').value.toUpperCase();
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const nacimiento = parseInt(document.getElementById('nacimiento').value);
  const DNI = parseInt(document.getElementById('DNI').value);

const persona = new Persona(nombre, edad, sexo, peso, altura, nacimiento, DNI);

resultadoDiv.innerHTML = `
<p>Información de la persona:</p>
<p>Nombre: ${persona.nombre}</p>
<p>Edad: ${persona.edad}</p>
<p>Sexo: ${persona.sexo}</p>
<p>Peso: ${persona.peso}</p>
<p>Altura: ${persona.altura}</p>
<p>Año de Nacimiento: ${persona.nacimiento}</p>
<p>DNI: ${persona.DNI}</p>
<p>Generación :  ${persona.generacion}</p>
<p>  ${persona.mayor}</p>
`;



});
