// CALCULADORA

let resultado;
operacion()

// FUNCIÓN DE RESULTADO
function operacion() {
    operador = prompt("Dime si quieres sumar(+), restar(-), dividir(/) o multiplicar(*)");
    num1 = Number(prompt("Dime el el primer número que quieras usar en la operación"));
    num2 = Number(prompt("Dime el segundo numero que quieras usar en la operación"));

    switch (operador) {
        case "+":
            resultado = suma(num1, num2);
            break;
        case "-":
            resultado = resta(num1, num2);
            break;
        case "*":
            resultado = multiplicacion(num1, num2);
            break;
        case "/":
            resultado = division(num1, num2);
            break;
    }
   console.log(`El resultado de tu operación es: ${resultado}`);
}



// FUNCIONES DE OPERACIONES
function suma(valor1, valor2) {
    return resultado = valor1 + valor2;
};

function resta(valor1, valor2) {
    return resultado = valor1 - valor2;
};

function multiplicacion(valor1, valor2) {
    return resultado = valor1 * valor2;
};

function division(valor1, valor2) {
    return resultado = valor1 / valor2;
};
