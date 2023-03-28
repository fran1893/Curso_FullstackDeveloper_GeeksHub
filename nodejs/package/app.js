// Paquete que devuelve un string en mayúsculas
const uperCase = require("upper-case");
// Paquete que calcula el factorial de un número
const factorial = require("factorial");

console.log(uperCase.upperCase("Hello world"));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(8));
console.log(factorial(78 ,{useBigInt: true}));
console.log(factorial(1479, {useBigInt: true}));
