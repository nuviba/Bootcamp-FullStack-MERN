/* 6. Escribe un módulo propio con una función que devuelva la longitud de un string que
recibe como parámetro. Impórtalo en el archivo index.js y muestra por consola el
resultado. */

let modulo=require ('./module');
let frase="Hola mundo";

console.log(modulo.stringLong(frase));