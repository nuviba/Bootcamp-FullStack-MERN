/* 9. Crea un módulo propio con una función. La función esPar() devuelve “true” en caso
de que el número sea par y “false” en caso contrario. En el archivo index.js, genera
un número aleatorio, llama a la función esPar() y muestra el resultado de la función. */

let numRan=Math.floor(Math.random() * (100 - 0) + 0);
let numPar=require("./module");
console.log(numRan);
console.log(numPar.esPar(numRan));