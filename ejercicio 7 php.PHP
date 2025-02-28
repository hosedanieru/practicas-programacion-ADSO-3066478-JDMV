<?php
// Condicionales if/else
// Sentencias condicionales IF/ELSE  
// Un condicional es una instrucción o grupo de instrucciones que se pueden ejecutar o no en función del valor de una condición. 
// De esta manera, controlaremos si la ejecución va por A o por B, 
// lo que nos ayudará a contemplar diferentes casos para cubrir el mayor número de escenarios posibles
// Depende de la condición del IF, tomará un camino u otro

$a = 2;
if ($a == 2) {
    echo "a vale 2\n";
} else {
    echo "a es distinto de 2\n";
}

// Podemos concatenar condiciones con los operadores lógicos and, or y not

$nombre = "Ana";
$edad = 28;
$ciudad = "Colombia";

if ($nombre == "Ana" && $edad == 28 && $ciudad == "Colombia") {
    echo "Su nombre es Ana, tiene 28 años y es de Colombia\n";
} elseif ($nombre == "Ana" && $edad != 28) {
    echo "Su nombre es Ana y no tiene 28 años\n";
} elseif ($nombre != "Ana" && $edad == 28) {      
    echo "Su nombre no es Ana y tiene 28 años\n";
} else {
    echo "No se llama Ana ni tiene 28 años\n";
}
?>
