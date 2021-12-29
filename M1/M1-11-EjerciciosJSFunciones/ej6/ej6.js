/* 6. Escribe un programa que pida al usuario dos números. Usa esos 2 números en una
función que divide el primero por el segundo y devuelve el resultado. Muestra el
resultado que devuelve la función en un alert. Después vuelve a pedir los números y
hacer todo otra vez hasta que el usuario introduzca un 0 como segundo número. */

let num1;
let num2;
let mostrar;

do{
    num1=parseInt(window.prompt('Dime un número:'));
    num2=parseInt(window.prompt('Dime otro número:'));
    mostrar = division(num1,num2);
    
    if(num2==0){
        alert('No se puede dividir entre 0.')
    }
    else{
        alert(mostrar);
    }
}while(num2!=0);

function division (num1,num2){
let resultado;
resultado=num1/num2;
return resultado;
}