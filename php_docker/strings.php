<?php
// STRINGS

// 1.- Crea una variable y asígnale el valor "La comida que más me gusta es el sushi".
// 2.- Determina la posición de la palabra "gusta" en la cadena.
// 3.- Reemplaza la palabra "más" por la palabra "menos".
// 4.- Comprueba si en la cadena existe la palabra "pasta".
// 5.- Invierte el orden de la cadena.
// 6.- Cuenta cuántas vocales "e" hay en la cadena.
// 7- Convierte la cadena en un array, y que cada posición del array sea una palabra

// 1
$comidaFavorita = "La comida que más me gusta es el sushi";
// 2
echo "<br>" . mb_stripos($comidaFavorita, "gusta");
// 3
echo "<br>" . str_replace("más", "menos", $comidaFavorita);
// 4
if (str_contains($comidaFavorita, "pasta")) {
    echo "<br> Contiene la palabra pasta";
} else {
    echo "<br> No contiene la palabra pasta";
};
// 5
function invertirCadena($comidaFavorita)
{
    $arrayComidaFavorita = explode(" ", $comidaFavorita);
    $arrayReverse = array_reverse($arrayComidaFavorita);
    echo "<br>" . implode(" ", $arrayReverse);
};

invertirCadena($comidaFavorita);
