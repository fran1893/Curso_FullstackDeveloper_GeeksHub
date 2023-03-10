// class Book {
//   // PROPIEDADES DE LA CLASE
//   title;
//   author;
//   editorial;
//   price;

//   constructor(title, author, editorial, price) {
//     this.title = title;
//     this.author = author;
//     this.editorial = editorial;
//     this.price = price;
//   }

//   // METODOS DE LA CLASE
//   getFullBook() {
//     return `Este es el libro ${this.title} de ${this.author}`;
//   }
// }

// const book = new Book("El Hobbit", "Tolkien", "Anaya", 15.9);
// const book2 = new Book("El Alquimista", "Paolo Coelho", "Anagrama", 19.9);

// console.log(book.getFullBook(), book2.getFullBook());

class Book {
  // PROPIEDADES DE LA CLASE
  #title;
  #author;
  #editorial;
  #price;

  constructor(title, author, editorial, price) {
    this.#title = title;
    this.#author = author;
    this.#editorial = editorial;
    this.#price = price;
  }

  // METODOS DE LA CLASE
  getFullBook() {
    return `Este es el libro ${this.#title} de ${this.#author}`;
  }

  // METODOS GETTERS Y SETTERS
  getEditorial() {
    return this.#editorial;
  }
  getPrice() {
    return this.#price;
  }

  setTitle(newTitle) {
    this.#title = newTitle;
  }
}


//CREAR UNA CLASE CON HERENCIA
class Comic extends Book {
  genre;
  volume;

  constructor(title, author, editorial, price, genre, volume) {
    super(title, author, editorial, price);
    this.genre = genre
    this.volume = volume
  }

  getTitle(){
    return this.title
  }
}


const comic = new Comic("One Piece", "Ouchida Oda", "planeta", 12.90, "manga", 52);
const book = new Book("El Hobbit", "Tolkien", "Anaya", 15.9);
const book2 = new Book("El Alquimista", "Paolo Coelho", "Anagrama", 19.9);

book.setTitle("El señor de los anillos");
console.log(book.getFullBook());
console.log(book.getEditorial());
console.log(book2.getPrice());
console.log(comic)
