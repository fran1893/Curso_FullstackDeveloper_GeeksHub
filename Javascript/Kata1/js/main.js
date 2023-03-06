let edad = +prompt("Introduzca su edad");
let acompañado = prompt("Estás acompañado? (SI/NO)")

// console.log(edad);

// // Nos dice el tipo de la variable edad
// console.log(typeof edad);

let eresAdulto = edad >= 18;
let estasAcompañado = acompañado == "SI";
let esPosiblePasar = eresAdulto || estasAcompañado;

if (eresAdulto || estasAcompañado) {
    console.log("Eres mayor de edad o estas acompañado, puedes entrar");
} else {
    console.log("Debes ser mayor de edad o estar acompañado para poder entrar");
}
