let sistemaSolar = {
    mercurio: {
      nombre: "mercurio",
      color: "gris",
      temperatura: 350,
      imagen: "https://www.astromia.com/fotosolar/fotos/planetamercurio.jpg",
    },
    venus: {
      nombre: "venus",
      color: "blanco",
      temperatura: 460,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg",
    },
    tierra: {
      nombre: "tierra",
      color: "morado",
      temperatura: 14,
      imagen:
        "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg",
    },
    marte: {
      nombre: "marte",
      color: "rojo",
      temperatura: -46,
      imagen:
        "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg",
    },
    jupiter: {
      nombre: "jupiter",
      color: "marrón",
      temperatura: -121,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg",
    },
    saturno: {
      nombre: "saturno",
      color: "amarillo",
      temperatura: -130,
      imagen:
        "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg",
    },
    urano: {
      nombre: "urano",
      color: "azul",
      temperatura: -205,
      imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
    },
    neptuno: {
      nombre: "neptuno",
      color: "azul",
      temperatura: -220,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg",
    },
    pluton: {
      nombre: "plutón",
      color: "blanco",
      temperatura: -229,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/1200px-Nh-pluto-in-true-color_2x_JPEG.jpg",
    },
  };
  
/* 7. Pedir al usuario tres nombres de planetas del Sistema Solar. Con el objeto Sistema
Solar, muestra los datos de los tres planetas elegidos. Asegúrate de que los
nombres existen (y coinciden con las claves del objeto) y de que el usuario no
introduce valores repetidos.
a. Los 3 planetas deberán aparecer en el navegador, cada uno dentro de una
card. Los tres estarán colocados uno junto al otro, alineados horizontalmente.
b. Arriba del todo de la card aparecerá el nombre, luego la imagen y después
las características (color y temperatura). */

let pl1=window.prompt('Dime el nombre del primer planeta:');
let pl2=window.prompt('Dime el nombre del segundo planeta:');
let pl3=window.prompt('Dime el nombre del tercer planeta:');
let prueba1=false;
let prueba2=false;
let prueba3=false;
let atributos=Object.keys(sistemaSolar);
let posicion;

//   planeta 1
let colourpl1;
let temppl1;
let photpl1;

for(let i=0;i<atributos.length;i++){
  if(pl1==sistemaSolar[atributos[i]].nombre){
    posicion=i;
    prueba1=true;
    colourpl1= sistemaSolar[atributos[posicion]].color;
    temppl1= sistemaSolar[atributos[posicion]].temperatura;
    photpl1=sistemaSolar[atributos[posicion]].imagen;
   }
  }
//  planeta 2
let colourpl2;
let temppl2;
let photpl2;

for(let j=0;j<atributos.length;j++){
  if(pl2==sistemaSolar[atributos[j]].nombre){
    posicion=j;
    prueba2=true;
    colourpl2= sistemaSolar[atributos[posicion]].color;
    temppl2= sistemaSolar[atributos[posicion]].temperatura;
    photpl2=sistemaSolar[atributos[posicion]].imagen;
    }
 }
 // planeta 3
 let colourpl3;
 let temppl3;
 let photpl3;
 
 for(let k=0;k<atributos.length;k++){
   if(pl3==sistemaSolar[atributos[k]].nombre){
     posicion=k;
     prueba3=true;
     colourpl3= sistemaSolar[atributos[posicion]].color;
    temppl3= sistemaSolar[atributos[posicion]].temperatura;
    photpl3=sistemaSolar[atributos[posicion]].imagen;
    
   }
  }
 if(pl1==pl2||pl2==pl3||pl3==pl1){
  window.alert('No puedes elegir dos planetas con el mismo nombre');
}
else if(prueba1&&prueba2&&prueba3){
  document.getElementById("nombrepl1").innerHTML='NOMBRE: '+pl1;
  document.getElementById("colorpl1").innerHTML='COLOR: '+colourpl1;
  document.getElementById("temperaturapl1").innerHTML='TEMPERATURA :'+temppl1;
  document.getElementById("imagpl1").setAttribute("src",photpl1);
  document.getElementById("imagpl1").style.width="300px";
  document.getElementById("imagpl1").style.height="220px";

  document.getElementById("nombrepl2").innerHTML='NOMBRE: '+pl2;
  document.getElementById("colorpl2").innerHTML='COLOR: '+colourpl2;
  document.getElementById("temperaturapl2").innerHTML='TEMPERATURA :'+temppl2;
  document.getElementById("imagpl2").setAttribute("src",photpl2);
  document.getElementById("imagpl2").style.width="300px";
  document.getElementById("imagpl2").style.height="220px";

  document.getElementById("nombrepl3").innerHTML='NOMBRE: '+pl3;
  document.getElementById("colorpl3").innerHTML='COLOR: '+colourpl3;
  document.getElementById("temperaturapl3").innerHTML='TEMPERATURA :'+temppl3;
  document.getElementById("imagpl3").setAttribute("src",photpl3);
  document.getElementById("imagpl3").style.width="300px";
  document.getElementById("imagpl3").style.height="220px";

  document.getElementById("general").style.display="flex";
  document.getElementById("general").style.justifyContent= "space-between";
}
else{
  window.alert('Has introducido algún planeta que no existe');
}

  
 
