//4. Lo mismo que en el ejercicio 3. Pero si es menor de edad que el mensaje sea rojo y si es mayor de edad que el mensaje sea verde.
let nombre= window.prompt('¿Cual es tu nombre?');
let edad=window.prompt('¿Cual es tu edad?');
if(edad<18){
    document.getElementById("p1").innerHTML=`
Hola `+nombre+` eres menor de edad`;
    document.getElementById("p1").style.color='red';

}
else {
    document.getElementById("p1").innerHTML=`
    Hola `+nombre+ ` eres mayor de edad`;
    document.getElementById("p1").style.color='green';


}
