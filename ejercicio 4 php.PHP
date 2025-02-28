<?php

// Conjuntos en PHP (equivalente a un set en Python)
$a = [1, 2, 3, 4];
print_r($a);

// No tienen índice, no podemos usar $a[0] directamente

// Podemos añadir valores y quitarlos, y ver su tamaño
echo count($a) . "\n";

// Añadir un valor
$a[] = 8;

// Eliminar un valor
$a = array_diff($a, [2]);

//Mostrar los valores sin array
echo implode(", ", $a) . "\n";

// Podemos ver si un elemento está o no en un conjunto
echo (in_array(5, $a) ? 'true' : 'false') . "\n";
echo (in_array(1, $a) ? 'true' : 'false') . "\n";

?>
