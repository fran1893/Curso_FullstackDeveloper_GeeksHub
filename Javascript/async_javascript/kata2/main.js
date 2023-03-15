// Create a function that prints your name on the screen for 1 second after being called.

const h1 = document.getElementById("objective");

const printSuma = (num1, num2) => {
  h1.innerHTML = `${num1} + ${num2} = ` + (num1 + num2);
};

setTimeout(() => {
  printSuma(2, 2);
}, 1000);

// const number1 = 2;
// const number2 = 4;

// const sumar = (a, b, cb) => {
//   const resul = a + b;
//   cb(resul);
// };

// const callback = (r) => {
//   console.log(r);
// };

// setTimeout(() => {
//   sumar(number1, number2, callback());
// }, 1000);
