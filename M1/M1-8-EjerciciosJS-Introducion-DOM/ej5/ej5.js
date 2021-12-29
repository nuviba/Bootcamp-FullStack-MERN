//5. Crea un programa que te pida 2 números. Mostrar en pantalla la suma, la resta, la multiplicación, la división y el resto de esos 2 números. Mostrar cada operación con un color y un color de fondo distintos.
let num1=parseInt(window.prompt('Dime un número:'));
let num2=parseInt(window.prompt('Dime otro número:'));
let suma=num1+num2;
let resta=num1-num2;
let multiplicación=num1*num2;
let división=num1/num2;
let resto=num1%num2;

document.getElementById("p1").innerHTML=
num1+`+`+num2+`=`+suma;
document.getElementById("p1").style.color='red';
document.getElementById("p1").style.background='grey';

document.getElementById("p2").innerHTML=
num1+`-`+num2+`=`+resta;
document.getElementById("p2").style.color='green';
document.getElementById("p2").style.background='yellow';

document.getElementById("p3").innerHTML=
num1+`*`+num2+`=`+multiplicación;
document.getElementById("p3").style.color='white';
document.getElementById("p3").style.background='black';

document.getElementById("p4").innerHTML=
num1+`/`+num2+`=`+división;
document.getElementById("p4").style.color='purple';
document.getElementById("p4").style.background='grey';

document.getElementById("p5").innerHTML=
num1+`%`+num2+`=`+resto;
document.getElementById("p5").style.color='withe';
document.getElementById("p5").style.background='green';







