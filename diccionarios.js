// Creación de un objeto (diccionario)
let coche = {
    marca: 'ford',
    color: 'rojo',
    modelo: 'sedan',
    placa: 'LLW019'
};

// Acceder a un valor usando una clave
console.log("Placa del coche:", coche['placa']); // LLW019

// Cambiar el valor de una clave
coche['modelo'] = 'cupe';
console.log("Modelo del coche:", coche['modelo']); // cupe

// Acceder a otro valor
console.log("Color del coche:", coche['color']); // rojo

// Cambiar el valor de otra clave
coche['color'] = 'amarillo';
console.log("Nuevo color del coche:", coche['color']); // amarillo

// Imprimir todo el objeto
console.log("Información completa del coche:", coche);