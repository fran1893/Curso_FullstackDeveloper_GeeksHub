// Permite usar el prompt en la consola
const prompt = require("prompt-sync")();
// Borrar consola
console.clear()

let persona = {
    name: "Alice",
    age: 33,
}

let persona2 = {
    name: "Raul",
    age: 21,
}

// Leer propiedades del objeto
console.log(persona.age);
console.log(persona2.age);
console.log(persona2.name);

// Modificar propiedades del objeto
persona.age = 44;
console.log(persona.age);

// Crear nuevas propiedades del objeto
persona.lastName = "Smith";

console.log(persona.lastName);