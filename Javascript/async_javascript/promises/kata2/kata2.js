// Crea una función que reciba 1 número y devuelva una promesa que se
// resuelve tras 1 segundo si el número es par y se rechace si es impar.

let input = document.getElementById("number");
let boton = document.getElementById("activate");
let printResult = document.getElementById("result");

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

boton.addEventListener("click", () => {
  parImpar(+input.value)
    .then((response) => {
      printResult.innerHTML = response;
    })
    .catch((err) => {
      printResult.innerHTML = err.message;
      console.log(err.message);
    });
});
