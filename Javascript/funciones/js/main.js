// FUNCIONES

// definiciones generales
function sumaDosNumeros(numero1, numero2) {
    return numero1 + numero2;
}

function log(data) {
    console.log(data);
}

// función anónima
let square = function (number) {
    return number * number;
};

function demo(nombre, edad, square) {
    let edadCuadrado = square(edad);
    console.log(`${nombre}, tu edad al cuadrado es ${edadCuadrado}`)
}

let x = square(4);

let a = 2;
let b = 4;
let suma = sumaDosNumeros(a, b);



console.log(suma);
console.log(sumaDosNumeros(2, 4));
log(suma);
log(x);

// llamada a la funcion demo
demo("Bob", 20, square)