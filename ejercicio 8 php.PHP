<?php
// Lectura por teclado

$a = readline();
echo $a . "\n";

// Podemos operar con lo introducido por teclado (lo trata como texto, no como número)

$a = readline();
echo $a . $a . "\n";

// Lo mismo para caracteres

$a = readline();
echo $a . $a . "\n";

// Si quisiéramos convertir lo introducido por teclado a entero, usaríamos (int) para transformar la cadena a entero

$a = readline();
$b = (int)$a;
echo ($b * 2) . "\n";
?>
