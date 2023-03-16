// Crea una función que reciba 1 número y devuelva una promesa que se
// resuelve tras 1 segundo si el número es par y se rechace si es impar.

// Declaración de variables
let input = document.getElementById("number");
let boton = document.getElementById("activate");
let printResult = document.getElementById("result");

// Creación de la promesa
const parImpar = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      setTimeout(() => {
        resolve(`El número ${num} es par`);
      }, 1000);
    } else {
      reject(new Error(`El número ${num} es impar`));
    }
  });
};

// Crear funcion async-await
const async_parImpar = async () => {
  try {
    const showResult = await parImpar(+input.value);
    printResult.innerHTML = showResult;
  } catch (error) {
    printResult.innerHTML = err.message;
  }
};

// Llamamos a la funcion async-await al hacer click el boton del html
boton.addEventListener("click", () => {
  async_parImpar();
});

// Funcion para borrar el resultado
// que se muestra en el parrafo cuando se vuelve a escribir nuevamente
const borrarParrafo = () => {
  printResult.innerHTML = "";
};
