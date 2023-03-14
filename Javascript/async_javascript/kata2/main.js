// Create a function that prints your name on the screen for 1 second after being called.

const h1 = document.getElementById("objective");

const printSuma = (num1, num2) => {
  h1.innerHTML = `${num1} + ${num2} = ` + (num1 + num2);
};

setTimeout(() => {
  printSuma(2, 2);
}, 1000);
