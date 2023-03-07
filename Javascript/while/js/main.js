// Halla la suma de 10 números entrados por teclado

// // definiciones generales
// let contador = 1;
// let suma = 0;

// // Entrada de datos y calculo
// while (contador <= 10) {
//     num = +prompt("Entre el número: " + contador);

//     suma = suma + num;

//     contador = ++contador;
// }

// // Mostrar resultados

// alert("El resultado de la suma es " + suma);





// Crea un programa que pida al usuario un
// número, y de este, generé su tabla de multiplicar
// del 0 al 10.

// definiciones generales
let contador = 0;
let tabla = "";
let num = +prompt("Entre el número del cual quiera ver su tabla de multiplicar");

// Entrada de datos y calculo
while (contador <= 10) {

    resultado = num * contador;

    tabla += `${num} X ${contador} = ${resultado}\n`;

    contador++
}

// Mostrar resultados

console.log(tabla);
