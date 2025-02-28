function validarNumeros(a, b) {
    if (a === b) { 
        return true; 
    } else {
        return false; 
    }
}


let a = parseInt(prompt("Introduzca un número:"));  
let b = parseInt(prompt("Introduzca otro número:")); 

let resultado = validarNumeros(a, b);

if (resultado) {
    console.log("Son iguales"); 
} else {
    console.log("Son distintos"); 
}