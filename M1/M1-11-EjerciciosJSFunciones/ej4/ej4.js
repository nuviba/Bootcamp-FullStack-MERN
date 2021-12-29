/* 4. Escribe una función que devuelva el resultado de sumar los dos parámetros que le
pasamos. Pide al usuario 2 números. Usa esos 2 números como parámetros de la
función y después asigna el valor que devuelve la función a una tercera variable.
Finalmente, muestra el valor de la variable en la consola. */

let num1=parseInt(window.prompt('Dime un número:'));
let num2=parseInt(window.prompt('Dime otro número:'));
let mostrar = suma(num1,num2);
console.log(mostrar);

function suma (num1,num2){
let resultado;
resultado=num1+num2;
return resultado;
}