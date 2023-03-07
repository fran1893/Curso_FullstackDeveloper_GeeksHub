// Crea un programa el cual te pregunte por una
// nota del 0 al 10 y dependiendo del número, te
// devuelva la siguiente clasificación.

// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.



// DEFINICIONES GENERALES
let message = "";

// ENTRADA DE DATOS
let nota = +prompt("Díme una nota del 0 al 10 y te devolvere su calificación");


// VALIDAR DATOS
let esNotaValida = Number.isInteger(nota) && nota >= 0 && nota <= 10; // Positiva
let esNotaNoValida = !Number.isInteger(nota) || nota < 0 || nota > 10; // Negativa

console.log(nota)
// CLASIFICACIÓN

if (!esNotaValida) {
    message = 'La nota debe ser entre 0 y 10, sin decimales'
}
else if (nota <= 4) {
    message = 'La calificación de esa nota es Insuficiente';
} else if (nota <= 6) {
    message = 'La calificación de esa nota es Suficiente';
} else if (nota <= 8) {
    message = 'La calificación de esa nota es Notable';
} else {
    message = 'La calificación de esa nota es Sobresaliente';
}

// VISUALIZAR RESULTADO
alert(message)