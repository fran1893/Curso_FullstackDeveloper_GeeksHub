// Crea una función que reciba 1 número y devuelva una promesa que se
// resuelve tras 1 segundo si el número es par y se rechace si es impar.

let numAcomparar = 2;

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

parImpar(numAcomparar)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err.message);
  });
