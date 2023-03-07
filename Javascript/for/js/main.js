// Crea un programa que pida al usuario un
// número, y de este, generé su tabla de multiplicar
// del 0 al 10.


// definiciones generales
let tabla = "";
let num = +prompt("Entre el número del cual quiera ver su tabla de multiplicar");

// Entrada de datos y calculo
for (let i = 0; i <= 10; i++) {

    resultado = num * i;

    tabla += `${num} X ${i} = ${resultado}\n`;
}

// Mostrar resultados

console.log(tabla);
