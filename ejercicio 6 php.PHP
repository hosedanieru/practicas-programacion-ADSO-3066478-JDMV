<?php

// Bucle For

// Nos permite recorrer una lista o diccionario

$nombres = ['Ana', 'Pablo', 'Diego', 'Carmen'];

// foreach ($nombres as $nombre) {
//     echo $nombre . "\n";
// }

// Para una lista de diccionarios

$personas = [];
$a = ['nombre' => 'Ana', 'edad' => 28];
$b = ['nombre' => 'Pablo', 'edad' => 35];
$c = ['nombre' => 'Luis', 'edad' => 38];

array_push($personas, $a, $b, $c);

foreach ($personas as $persona) {
    echo $persona['nombre'] . "\n";
    echo $persona['edad'] . "\n";
    print_r($personas);
}

// Nos permite acceder a los valores del diccionario y operar con ellos. Por ejemplo para crear una nueva lista

$lista_nombres = [];

foreach ($personas as $persona) {
    $lista_nombres[] = $persona['nombre'];
}
echo json_encode($lista_nombres) . "\n";

// Podemos coger una lista de números y modificar cada valores

$numeros = [1, 2, 3, 4, 5];

foreach ($numeros as $index => $numero) {
    $numeros[$index] += 3;
}
print_r($numeros);
?>
