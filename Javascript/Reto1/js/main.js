// Fórmula para sacar el mayor de dos números

let a = +prompt("Escriba el primer número");
let b = +prompt("Escriba un segundo número")

if (a > b) {
    console.log(`El mayor es ${a}`);
} else if (a < b) {
    console.log(`El mayor es ${b}`);
} else {
    console.log('Los números son iguales');
}