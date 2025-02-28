let a = [1, 2, 3, 4];
console.log("Tupla original:", a);

console.log("Primer elemento:", a[0]); 

console.log("Subsección:", a.slice(0, 2)); 


console.log("Tamaño de la tupla:", a.length);


console.log("¿El número 5 está en la tupla?", a.includes(5)); 
console.log("¿El número 1 está en la tupla?", a.includes(1)); 

// Convertir la tupla a una lista (en JavaScript, ya es un array)
let lista = [...a]; 
console.log("Convertido a lista:", lista);

// Agregar un elemento a la lista (esto no sería posible en una tupla)
lista.push(5);
console.log("Lista con nuevo elemento:", lista);