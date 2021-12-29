//3. Crea un programa que te pida un nombre y una edad. Si la edad es menor a 18 años mostrar en pantalla “Hola (nombre), eres menor de edad.”. Si es mayor mostrar en pantalla “Hola (nombre), eres mayor de edad.”. Hacedlo con if, switch y condicional ternario.
let nombre= window.prompt('¿Cual es tu nombre?');
let edad=window.prompt('¿Cual es tu edad?');

edad>=18?document.getElementById("p1").innerHTML=`Hola `+nombre+ ` eres mayor de edad` :document.getElementById("p1").innerHTML=`Hola `+nombre+` eres menor de edad` ;

