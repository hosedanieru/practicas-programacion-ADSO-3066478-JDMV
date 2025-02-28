<?php

// Listas en PHP (equivalente a listas en Python)
$a = [1, 2, 3, 4];
print_r($a);

// Operaremos como si fuese un array

echo $a[0] . "\n";

echo implode(", ", array_slice($a, 0, 2)) . "\n";

// Concatenaremos una lista con otra lista o un número
$b = [5, 6];

print_r(array_merge($a, $b));

// Podemos sustituir el valor de una posición
$a[3] = 'Hola';
print_r($a);

// Podemos usar el método array_push() para añadir un elemento
array_push($a, 3);
print_r($a);

// Al igual que en los strings, podemos usar count() para obtener la longitud
echo count($a) . "\n";

// Podemos ver si un elemento está o no en una lista
echo (in_array(5, $a) ? 'true' : 'false') . "\n";
echo (in_array(1, $a) ? 'true' : 'false') . "\n";

?>
