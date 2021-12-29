let nombre= window.prompt('¿Cual es tu nombre?');
let edad=window.prompt('¿Cual es tu edad?');

if(edad<18){
    document.getElementById("p1").innerHTML=`
Hola `+nombre+` eres menor de edad`;

}
else {
    document.getElementById("p1").innerHTML=`
    Hola `+nombre+ ` eres mayor de edad`;


}
