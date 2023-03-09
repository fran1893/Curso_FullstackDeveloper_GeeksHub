// Vamos a desarrollar un programa, que a partir
// de una lista de películas, diga al usuarios que
// películas pueden ver o no, según estas reglas.

// 1. La edad del usuario tiene que ser mayor o
// igual a la edad recomendada de la película.

// 2. Por seguridad, se necesita, nombre, edad.

// Listado de Películas:
// 1. Soy Leyenda, +13
// 2. Rey León, +3
// 3. La Marca del Demonio +18
// 4. A todo Gas +8

// Permite usar el prompt en la consola
const prompt = require("prompt-sync")();
// Borrar consola
console.clear();

// Listado de Variables
let movies = [
  { title: "Soy leyenda", age: 13 },
  { title: "Rey León", age: 3 },
  { title: "La marca del Demonio", age: 18 },
  { title: "A todo Gas", age: 8 },
];
let user = {
  name: "",
  age: 0,
};

// Pedidos de datos al usuario
user.name = prompt("Dime tu nombre: ");
user.age = Number(prompt("Dime tu edad y te dire que películas puedes ver: "));

let recomendations = `Buenos días ${user.name} estas son tus películas recomendadas: \n`;

// Funcionamiento App
for (let i = 0; i < movies.length; i++) {
  if (user.age >= movies[i].age) {
    recomendations += `${movies[i].title}\n`;
  }
}

// Visualización Resultado
console.log(recomendations);
