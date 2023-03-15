// Crea una función que devuelva una promesa. Esa promesa debe
// resolverse (pasar a estado fulfilled) con “hola mundo” tras 1 segundo.
// Invocar esa función y consumir esa promesa que devuelve para imprimir
// ese “hola mundo” por pantalla

let holaMundo = "Hola Mundo";

const getHolaMundo = () => {
  return new Promise((resolve, reject) => {
    if (holaMundo != "Hola Mundo") {
      reject(new Error("El mensaje no es el requerido"));
    }

    setTimeout(() => {
      resolve(holaMundo);
    }, 1000);
  });
};

getHolaMundo()
  .then((response) => {
    console.log(`El mensaje es: ${response}`);
  })
  .catch((err) => {
    console.log(err);
  });
