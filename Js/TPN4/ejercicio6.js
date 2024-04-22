/*Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this.validarISBN(ISBN);
      this.validarTitulo(titulo);
      this.validarAutor(autor);
      this.validarNumPaginas(numPaginas);
  
      this.ISBN = ISBN;
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
    }
  
    validarISBN(ISBN) {
      if (!ISBN || typeof ISBN !== "string" || ISBN.trim().length === 0) {
        throw new Error("El ISBN debe ser una cadena no vacía.");
      }
    }
  
    validarTitulo(titulo) {
      if (!titulo || typeof titulo !== "string" || titulo.trim().length === 0) {
        throw new Error("El título debe ser una cadena no vacía.");
      }
    }
  
    validarAutor(autor) {
      if (!autor || typeof autor !== "string" || autor.trim().length === 0) {
        throw new Error("El autor debe ser una cadena no vacía.");
      }
    }
  
    validarNumPaginas(numPaginas) {
      if (typeof numPaginas !== "number" || isNaN(numPaginas) || numPaginas <= 0) {
        throw new Error("El número de páginas debe ser un número entero positivo.");
      }
    }
  
    mostrarLibro() {
      console.log(`El libro "${this.titulo}" con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`);
    }
  }  
  
  function ingresarDatosLibro() {
    const ISBN = prompt("Ingrese el ISBN del libro:");
    const titulo = prompt("Ingrese el título del libro:");
    const autor = prompt("Ingrese el autor del libro:");
    const numPaginas = parseInt(prompt("Ingrese el número de páginas del libro:"));
  
    return new Libro(ISBN, titulo, autor, numPaginas);
  }  
  
  let libro1, libro2;
  do {
    libro1 = ingresarDatosLibro();
    libro2 = ingresarDatosLibro();
  } while (libro1.numPaginas <= 0 || libro2.numPaginas <= 0);  
  
  libro1.mostrarLibro();
  libro2.mostrarLibro();  
  
  if (libro1.numPaginas > libro2.numPaginas) {
    console.log(`${libro1.titulo} tiene más páginas que ${libro2.titulo}.`);
  } else if (libro1.numPaginas < libro2.numPaginas) {
    console.log(`${libro2.titulo} tiene más páginas que ${libro1.titulo}.`);
  } else {
    console.log("Ambos libros tienen la misma cantidad de páginas.");
  }