/* 5. Escribe una función a la que le damos dos números y que devuelva true si el primer
número es más grande que el segundo número y false en el caso contrario. Pide dos
números al usuario, y pasalos a la función. Muestra en consola “El primer número es
más grande” o “El primer número no es más grande”. */

let num1=parseInt(window.prompt('Dime un número:'));
let num2=parseInt(window.prompt('Dime otro número:'));

let resultado= mayor_menor(num1,num2);

if(resultado){
    console.log(`${num1} es mayor que ${num2}`);
}
else{
    console.log(`${num2} es mayor que ${num1}`);

}

function mayor_menor (num1,num2){
    let resultado=true;
    if(num1>num2){
        resultado=true
    }
    else{
        resultado=false
    }
    return resultado;

}