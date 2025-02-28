// Lista de nombres
let nombres = ['Ana', 'Pablo', 'Diego', 'Carmen'];

// Recorrer la lista con un bucle for
for (let nombre of nombres) {
    console.log(nombre);
}
// Lista de personas (objetos en JavaScript)
let personas = [];

// Definir objetos (similares a diccionarios en Python)
let a = { nombre: 'Ana', edad: 28 };
let b = { nombre: 'Pablo', edad: 35 };
let c = { nombre: 'Luis', edad: 38 };

// Agregar objetos a la lista
personas.push(a);
personas.push(b);
personas.push(c);

// Recorrer la lista de personas
for (let persona of personas) {
    console.log(persona.nombre); // Acceder al valor de 'nombre'
    console.log(persona.edad);   // Acceder al valor de 'edad'
    console.log(personas);       // Imprimir la lista completa
}
// Crear una lista vacía para almacenar los nombres
let listaNombres = [];

// Recorrer la lista de personas y agregar los nombres a la nueva lista
for (let persona of personas) {
    listaNombres.push(persona.nombre);
}

// Mostrar la lista de nombres
console.log(listaNombres);
// Lista de números
let numeros = [1, 2, 3, 4, 5];

// Recorrer la lista y modificar cada valor
for (let i = 0; i < numeros.length; i++) {
    numeros[i] += 3; // Sumar 3 a cada elemento
}

// Mostrar la lista modificada
console.log(numeros);