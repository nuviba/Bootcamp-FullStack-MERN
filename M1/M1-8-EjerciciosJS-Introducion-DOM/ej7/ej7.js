/* 7. Crea una página web con su Header (con tres enlaces), su Main(con tres divs, dentro de cada div podéis meter lo que queráis por ejemplo una noticia) y su Footer (con un enlace al inicio de la página). Los enlaces del Header nos deberían llevar cada uno a uno de los divs.
 */

/*let ciudad1="Valencia";
let ciudad2="París";
let ciudad3="Roma";

document.getElementById("en1").innerHTML= ciudad1;
document.links("en1");
document.getElementById("en2").innerHTML=ciudad2;
document.links("en2");
document.getElementById("en3").innerHTML=ciudad3;
document.links("en3");*/

let ciudad1="Valencia";
let ciudad2="París";
let ciudad3="Roma";

let link1 = "#ciu1";
let link2 = "#ciu2";
let link3 = "#ciu3";

document.getElementById("en1").innerHTML += '<a href="'+link1+'">'+ciudad1+'</a>';
document.getElementById("en2").innerHTML += '<a href="'+link2+'">'+ciudad2+'</a>';
document.getElementById("en3").innerHTML += '<a href="'+link3+'">'+ciudad3+'</a>';

document.getElementById("ciu1").innerHTML = '<h2>'+ciudad1+'</h2>';
document.getElementById("ciu2").innerHTML = '<h2>'+ciudad2+'</h2>';
document.getElementById("ciu3").innerHTML = '<h2>'+ciudad3+'</h2>';

document.getElementById("ciu1").innerHTML += '<img id=fot src="./Valencia.jpeg" alt="Paisaje playa Menorca"></img>';
document.getElementById("ciu2").innerHTML += '<img id=fot src="./Paris.jpeg" alt="Paisaje playa Menorca"></img>';
document.getElementById("ciu3").innerHTML += '<img id=fot src="./Roma.jpeg" alt="Paisaje playa Menorca"></img>';

document.getElementsByTagName('footer')[0].innerHTML += '<a href = "#inicio">Volver al inicio </a>'