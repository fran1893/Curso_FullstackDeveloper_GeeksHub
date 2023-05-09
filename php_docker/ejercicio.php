<?php

// Ejercicio 1 
// Imprimir "Buzz" si un número es múltiplo de 5
// "Fizz" si es múltiplo de 3
// "FizzBuzz", si es múltiplo de ambos y imprimir el resto de numeros en pantalla

$numero = 50;

for ($i = 1; $i <= $numero; $i++) {

    if ($i % 3 == 0 && $i % 5 == 0) {
        echo "FizzBuzz <br>";
    } elseif ($i % 3 == 0) {
        echo "Fizz <br>";
    } elseif ($i % 5 == 0) {
        echo "Buzz <br>";
    } else {
        echo "<div>" . $i . "</div>";
    }
}

