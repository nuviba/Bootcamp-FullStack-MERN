/* 9. Crea una aplicación que nos cuente el número de cifras de un número entero
positivo (hay que confirmar que no haya introducido un número negativo y
deberemos quitar los decimales) pedido por teclado. Crea un método que realice
esta acción: pasando el número por parámetro, devolverá el número de cifras.
Después mostrar ese número en un alert. */
let num1;
let resultado;
do{
     num1=parseInt(window.prompt('Dime un número positivo'));
    if(num1<0){
        alert('Número erróneo, dime un número positivo.')

    }
}while(num1<0)

    resultado= contCar(num1);
    alert(`${num1} tiene ${resultado} carácter/es.`);

function contCar (num1){
    let resultado;
    resultado=num1.toString().length;
    return resultado;
    
}