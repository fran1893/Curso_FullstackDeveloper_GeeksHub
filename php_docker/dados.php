<?php
function lanzar_dados($cantidad_dados = 1, $caras_dado = 6)
{

    if ($cantidad_dados < 1) {
        return "el mínimo de dados tiene que ser un valor mayor que 0";
    }

    if ($caras_dado < 1) {
        return "el mínimo de caras de cada dado tiene que ser un valor mayor que 0";
    }

    for ($i = 1; $i <= $cantidad_dados; $i++) {

        $num = rand($cantidad_dados, $caras_dado);
        echo "El dado " . $i . " :" . $num;
    }

    return  $num = rand($cantidad_dados, $caras_dado);
}

echo lanzar_dados();
