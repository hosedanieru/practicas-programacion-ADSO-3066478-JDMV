let a = [1, 2, 3, 4];
console.log("Lista original:", a);

console.log("Primer elemento:", a[0]); 

console.log("Subsección:", a.slice(0, 2)); 

let b = [5, 6];
console.log("Listas concatenadas:", a.concat(b)); 

a[3] = "Hola";
console.log("Lista con valor sustituido:", a); 

a.push(3);
console.log("Lista con nuevo elemento:", a);

console.log("Tamaño de la lista:", a.length); 

console.log("¿El número 5 está en la lista?", a.includes(5)); 
console.log("¿El número 1 está en la lista?", a.includes(1)); 