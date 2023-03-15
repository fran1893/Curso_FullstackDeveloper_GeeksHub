// Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
// Crea una función que obtenga un elemento aleatorio del array
// y lo saque por consola.

const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const randomElement = (lista) => {
  let randomNumber = Math.round(Math.random() * (lista.length - 1));
  let randomValue = lista[randomNumber];
  console.log(randomValue);
};

randomElement(letras);
