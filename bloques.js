let a = 5;
let b = 7;
let c = a * b + 3; // Multiplicar y sumar
console.log(c); // Mostrar el resultado (38)

console.log(c === 38); // true

let edadAna = prompt("Introduce la edad de Ana:");
let edadPablo = prompt("Introduce la edad de Pablo:");

console.log(`La edad de Ana es ${edadAna} y la de Pablo es ${edadPablo}.`);

let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));

console.log("¿Son iguales?", num1 === num2); // Igualdad
console.log("¿Son distintos?", num1 !== num2); // Desigualdad
console.log("¿El primero es menor o igual que el segundo?", num1 <= num2); // Menor o igual
console.log("¿El primero es mayor o igual que el segundo?", num1 >= num2); // Mayor o igual

let cadena1 = prompt("Introduce la primera cadena:");
let cadena2 = prompt("Introduce la segunda cadena:");

console.log("¿Las cadenas son iguales?", cadena1 === cadena2); // Igualdad
console.log("¿Las cadenas son distintas?", cadena1 !== cadena2); // Desigualdad
console.log("¿La primera cadena es menor o igual que la segunda?", cadena1.length <= cadena2.length); // Menor o igual en longitud
console.log("¿La primera cadena es mayor o igual que la segunda?", cadena1.length >= cadena2.length); // Mayor o igual en longitud
