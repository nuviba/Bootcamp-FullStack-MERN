/* 7. Diseña una función esPar() que reciba como parámetro un número y devuelva si ese
número es par o no. Utilízalo en un programa que lea un número por prompt y
determine si es par o no y muestre un mensaje al respecto en un alert. */

let num1=parseInt(window.prompt('Dime un número:'));

let resultado= esPar(num1);

if(resultado){
    alert(`${num1} es par`);
}
else{
    alert(`${num1} es impar`);

}

function esPar (num1){
    let resultado=true;
    if(num1%2==0){
        resultado=true
    }
    else{
        resultado=false
    }
    return resultado;

}