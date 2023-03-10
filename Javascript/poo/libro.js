// OBJETOS LITERALES:

const book = {
  title: "El Alquimista",
  autor: "Paolo Coelho",
  editorial: "Anagrama",
  precio: 19.9,
  getFullBook() {
    return `Este es el libro ${this.title} de ${this.autor}`;
  },
};

const book2 = {
  title: "El Hobbit",
  autor: "Tolkien",
  editorial: "Anaya",
  precio: 15.9,
  getFullBook() {
    return `Este es el libro ${this.title} de ${this.autor}`;
  },
};

console.log(book.getFullBook());
