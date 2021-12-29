/* 8. Crea una aplicación que nos calcule el factorial de un número pedido por teclado, lo
realizará mediante una función al que le pasamos el número como parámetro. Para
calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por
ejemplo, si introducimos un 5, realizará esta operación 5*4*3*2*1=120. Mostrar el
resultado en un alert. */
let num1;
let resultado;
do{
     num1=parseInt(window.prompt('Dime un número para calcular su factorial:'));
    if(num1<0){
        alert('No se puede calcular el factorial de un número negativo')

    }
}while(num1<0)

    resultado= factorial(num1);
    alert(`El factorial de ${num1} es ${resultado}`);

function factorial (num1){
    let fact=1;
    for(let i=1;i <=num1;i++){
        fact=i+1*fact;
    }
    return fact;
}