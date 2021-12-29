/* 6. Crea un programa que te pregunte qué operación deseas realizar (Suma, Resta, Multiplicación, División y Resto). Después te pedirá dos números y aparecerán los dos números introducidos y el resultado de la operación de forma visual.let num1=parseInt(window.prompt('Dime un número:'));
 */
let num1=parseInt(window.prompt('Dime un número:'));
let num2=parseInt(window.prompt('Dime otro número:'));
let opcion=parseInt(window.prompt('¿Qué operación queires hacer?\n1-Suma\n2-Resta\n3-Multiplicación\n4-División\n5-Resto'));
let suma=num1+num2;
let resta=num1-num2;
let multiplicación=num1*num2;
let división=num1/num2;
let resto=num1%num2;

switch(opcion){
    case 1:
        document.getElementById("p1").innerHTML=
        num1+`+`+num2+`=`+suma;
        document.getElementById("p1").style.color='red';
        document.getElementById("p1").style.background='grey';
    break;
    case 2:
        document.getElementById("p1").innerHTML=
        num1+`-`+num2+`=`+resta;
        document.getElementById("p1").style.color='green';
        document.getElementById("p1").style.background='yellow';
    break;
    case 3:
        document.getElementById("p1").innerHTML=
        num1+`*`+num2+`=`+multiplicación;
        document.getElementById("p1").style.color='white';
        document.getElementById("p1").style.background='black';
    break;
    case 4:
        document.getElementById("p1").innerHTML=
        num1+`/`+num2+`=`+división;
        document.getElementById("p1").style.color='purple';
        document.getElementById("p1").style.background='grey';
    break;
    case 5:
        document.getElementById("p1").innerHTML=
        num1+`%`+num2+`=`+resto;
        document.getElementById("p1").style.color='withe';
        document.getElementById("p1").style.background='green';
    break;
    default:
        window.alert('Opción no válida');


}
















