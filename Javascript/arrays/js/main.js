// La propiedad .length nos devuelve el tamaño el array.

// let numeros = [1, 24, 456, 4];
// console.log(numeros.length); // 4

// // Mostrar la lista en consola:
// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

// // PUSH
// let numeros2 = [1, 2, 3];
// let newLength = numeros2.push(100);
// console.log(newLength);
// console.log(numeros2); // [1,2,3,100]
// numeros2.push(200, 400);
// console.log(numeros2); // [1,2,3,100,200,400]

// // CONCAT
// let equipos_a = ['Valencia', 'Barça', 'Real Madrid'];
// let equipos_b = ['Hercules', 'Zaragoza', 'Valladolid'];
// let equipos_copa = equipos_a.concat(equipos_b);
// console.log(equipos_copa); // ["Valencia", "Barça", "Real Madrid","Hercules", "Zaragoza", "Valladolid"]
// console.log(equipos_a); // ["Valencia", "Barça", "Real Madrid"]


// // JOIN
// let nombres = ['Manuel', 'Antonio', 'Pepe'];
// console.log(nombres.join('-')); //"Manuel-Antonio-Pepe"

// // REVERSE
// let nombres2 = ['Manuel', 'Antonio', 'Pepe'];
// nombres2.reverse();
// console.log(nombres2); // ["Pepe", "Antonio", "Manuel"]

// // UNSHIFT
// let nombres3 = ['Manuel', 'Antonio', 'Pepe'];
// let valor_nombres3 = nombres3.unshift('Jesús');
// console.log(valor_nombres3); // 4
// console.log(nombres3); // ["Jesús","Manuel","Antonio","Pepe"]

// // SHIFT
// let nombres4 = ['Manuel', 'Antonio', 'Pepe'];
// let valor_resto = nombres4.shift();
// console.log(valor_resto); // Manuel
// console.log(nombres4); // [ 'Antonio', 'Pepe' ]

// // POP
// let nombres5 = ['Manuel', 'Antonio', 'Pepe'];
// console.log(nombres5.pop()); // Pepe
// console.log(nombres5); // [ 'Manuel', 'Antonio' ]


// KATA(EJERCICIO)
// Vamos a crear una función que valide que un
// número de DNI y una letra son compatibles para
// ello, necesitamos el siguiente algoritmo.
// 1. Realizar el módulo del número del DNI
// entre 23.
// 2. El resultado de ese módulo es la posición
// del siguiente array. TRWAGMYFPDXBNJZSQVHLCKET

let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

console.log(12345678 % 23)
