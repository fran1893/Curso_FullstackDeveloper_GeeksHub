// Permite usar el prompt en la consola
const prompt = require("prompt-sync")();
// Borrar consola
console.clear();

// Definiciones Generales
const movies = [
  { title: "Soy Leyenda", age: 13 },
  { title: "El Rey León", age: 3 },
  { title: "A Todo Gas", age: 8 },
  { title: "El demonio", age: 18 },
];

// Entrada de datos
let userName = prompt("Diga su nombre: ");
let userAge = +prompt("Diga su edad: ");

// Crear objeto
const user = {
  name: userName,
  age: userAge,
};

// Peliculas que puede ver el Usuario
const moviesUser = [];

for (let movie of movies) {
  if (user.age >= movie.age) {
    moviesUser.push(movie);
  }
}

// Mostrar Resultados
console.log(
  `${user.name}, con tu edad de ${user.age} puedes ver estas películas: `
);
for (let mv of moviesUser) {
  console.log(`- ${mv.title} (+${mv.age})`);
}
