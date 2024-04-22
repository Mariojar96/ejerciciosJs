class Contacto {
    constructor(nombre, telefono) {

        if (!this.validarNombre(nombre)) {
            console.error("El nombre del contacto debe ser una cadena no vacía.");
            return;
          }
      
          if (!this.validarTelefono(telefono)) {
            console.error("El teléfono del contacto debe ser una cadena no vacía.");
            return;
          }

      this.nombre = nombre;
      this.telefono = telefono;
    }
    validarNombre(nombre) {
        return nombre && typeof nombre === "string" && nombre.trim().length > 0;
      }
    
      validarTelefono(telefono) {
        return telefono && typeof telefono === "string" && telefono.trim().length > 0;
      }
  }
  
  class Agenda {
    constructor(tamañoMaximo = 10) {
      this.tamañoMaximo = tamañoMaximo;
      this.contactos = [];
    }
  
    añadirContacto(contacto) {
      if (this.agendaLlena(false)) {
        console.error('Agenda llena');
        return;
      }
  
      this.contactos.push(contacto);
    }
  
    listarContactos() {
      console.log('Listando los contactos:');
  
      let mensaje = '';
      this.contactos.forEach((contacto, index) => {
        mensaje += `${index + 1}: ${contacto.nombre} - ${contacto.telefono}\n`;
      });
  
      console.log(mensaje);
    }
  
    // Devuelve un contacto, si es que lo encuentra
    buscarContacto(nombre, mostrarNumero = true) {
      const contactoEncontrado = this.contactos.find((contactoActual) => {
        return (
          contactoActual.nombre.trim().toLowerCase() ===
          nombre.trim().toLowerCase()
        );
      });
  
      if (mostrarNumero) {
        if (contactoEncontrado) {
          console.log(
            `Contacto encontrado: ${contactoEncontrado.nombre} - ${contactoEncontrado.telefono}`
          );
        } else {
          console.log('No se encontró el contacto');
        }
      }
  
      return contactoEncontrado;
    }
  
    // Devuelve si existe o no (booleano)
    existeContacto(nombre) {
      // return Boolean(this.buscarContacto(nombre, false));
  
      const contactoEncontrado = this.buscarContacto(nombre, false);
  
      if (contactoEncontrado) {
        console.log(`Si existe un contacto con el nombre de ${nombre}`);
      } else {
        console.log(`No existe un contacto con el nombre de ${nombre}`);
      }
  
      return Boolean(contactoEncontrado);
    }
  
    agendaLlena(mostrarMensaje = true) {
      const estaLlena = this.contactos.length >= this.tamañoMaximo;
  
      if (mostrarMensaje) {
        if (estaLlena) {
          console.log('Cantidad máxima de contactos alcanzada');
        } else {
          console.log('Aun quedan espacios en la agenda');
        }
      }
  
      return estaLlena;
    }
  
    huecosLibres() {
      const longitudActual = this.contactos.length;
  
      console.log(`Quedan ${this.tamañoMaximo - longitudActual} espacios libres`);
  
      return this.tamañoMaximo - longitudActual;
    }
  
    eliminarContacto(nombre) {
      const indice = this.contactos.indexOf((contactoActual) => {
        return (
          contactoActual.nombre.trim().toLowerCase() ===
          nombre.trim().toLowerCase()
        );
      });
  
      if (indice === -1) {
        console.log(`No se encontró el contacto ${nombre}`);
        return;
      }
      console.log(`Eliminando contacto ${nombre}`);
  
      this.contactos.splice(indice, 1);
    }
  }
  
  const tamaño = Number(prompt('Ingrese el tamaño de la agenda'));
  
  const agenda = new Agenda(tamaño);
  let salir = false;
  
  do {
    const respuesta = prompt(`Bienvenido a la agenda
  1. Añadir contacto
  2. Listar contactos
  3. Eliminar contacto
  4. Buscar contacto por nombre
  5. Averiguar si un contacto existe por nombre
  6. Ver agenda si está llena
  7. Ver lugares disponibles en agenda
  8. Salir`);
  
    switch (respuesta) {
      case '1':
        const nombrePersona = prompt('Ingrese el nombre');
        const numeroTelefono = prompt('Ingrese el número');
  
        const contacto = new Contacto(nombrePersona, numeroTelefono);
        agenda.añadirContacto(contacto);
        break;
      case '2':
        agenda.listarContactos();
        break;
      case '3':
        const nombreEliminar = prompt('Ingrese el nombre');
        agenda.eliminarContacto(nombreEliminar);
        break;
      case '4':
        const nombreBuscar = prompt('Ingrese el nombre');
        agenda.buscarContacto(nombreBuscar);
        break;
      case '5':
        const nombreExiste = prompt('Ingrese el nombre');
        agenda.existeContacto(nombreExiste);
        break;
      case '6':
        agenda.agendaLlena();
        break;
      case '7':
        agenda.huecosLibres();
        break;
      case '8':
      case null:
        salir = true;
        break;
      default:
        alert('Ingrese una opción válida');
    }
  } while (salir === false);