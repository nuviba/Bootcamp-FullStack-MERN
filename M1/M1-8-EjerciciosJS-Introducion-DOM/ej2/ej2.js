//2. Crea una variable con tu nombre. Después haz un párrafo que diga “Hola, me llamo (tu nombre)”.
let nombre=window.prompt('Dime tu nombre:');
document.getElementById("p1").innerHTML=`
Hola, me llamo ` + nombre;