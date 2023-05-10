<?php

include('platos_header.php');
include('platos_footer.php');

$platos = [
    [
        "titulo" => "Pabellón",
        "numero_comensales" => 9,
        "tipo_de_plato" => "principal",
        "precio" => 7
    ],
    [
        "titulo" => "pizza",
        "numero_comensales" => 9,
        "tipo_de_plato" => "principal",
        "precio" => 7
    ],
    [
        "titulo" => "tres chocolates",
        "numero_comensales" => 9,
        "tipo_de_plato" => "postre",
        "precio" => 7
    ],
];

// foreach ($platos as $plato) {
//     echo "<h1>" . $plato["titulo"] . "</h1>";
//     echo "numero de comensales: " . $plato["numero_comensales"];
//     echo "<br>";
//     echo "numero de comensales: " . $plato["tipo_de_plato"];
// }
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Platos</title>
</head>

<body>
    <header><?php echo $header ?></header>
    <table>
        <tr>
            <th style="border: 1px solid black;">Nombre Plato</th>
            <th style="border: 1px solid black;">Número Comensales</th>
            <th style="border: 1px solid black;">Tipo de plato</th>
            <th style="border: 1px solid black;">Precio</th>
        </tr>
        <?php foreach ($platos as $plato) : ?>
            <tr>
                <td style="text-align: center;"><?= $plato["titulo"] ?></td>
                <td style="text-align: center;"><?= $plato["numero_comensales"] ?></td>
                <td style="text-align: center;"><?= $plato["tipo_de_plato"] ?></td>
                <td style="text-align: center;"><?= $plato["precio"] ?></td>
            </tr>
        <?php endforeach; ?>
    </table>

    <footer><?php echo $footer ?></footer>
</body>

</html>