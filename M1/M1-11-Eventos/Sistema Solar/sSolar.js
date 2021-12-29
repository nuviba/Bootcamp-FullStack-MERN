let sistemaSolar = [
  {
    nombre: "mercurio",
    color: "gris",
    fondo: "grey",
    temperatura: 350,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1024px-Mercury_in_color_-_Prockter07_centered.jpg",
  },
  {
    nombre: "venus",
    color: "blanco",
    fondo: "white",
    temperatura: 460,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg",
  },
  {
    nombre: "tierra",
    color: "morado",
    fondo: "purple",
    temperatura: 14,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg",
  },
  {
    nombre: "marte",
    color: "rojo",
    fondo: "red",
    temperatura: -46,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg",
  },
  {
    nombre: "jupiter",
    color: "marrón",
    fondo: "brown",
    temperatura: -121,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg",
  },
  {
    nombre: "saturno",
    color: "amarillo",
    fondo: "yellow",
    temperatura: -130,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg",
  },
  {
    nombre: "urano",
    color: "azul",
    fondo: "blue",
    temperatura: -205,
    imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
  },
  {
    nombre: "neptuno",
    color: "azul",
    fondo: "blue",
    temperatura: -220,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg",
  },
  {
    nombre: "plutón",
    color: "blanco",
    fondo: "white",
    temperatura: -229,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/1200px-Nh-pluto-in-true-color_2x_JPEG.jpg",
  },
];
/* Sistema Solar
Pedir al usuario tres nombres de planetas del Sistema Solar. Con el objeto Sistema Solar,
muestra los datos de los tres planetas elegidos. Asegúrate de que los nombres introducidos
existen y de que el usuario no introduce valores repetidos.
1. Los 3 planetas deberán aparecer en el navegador. Los tres estarán colocados uno
junto al otro, alineados horizontalmente.
2. Arriba del todo de la caja de cada planeta aparecerá el nombre, luego la imagen y
después las características (color y temperatura).
3. Añade un botón a cada planeta: al hacer click se cambiará el color de fondo de esa
tarjeta por el color de ese planeta. */

function savCompShow(){
  let planeta1=document.getElementById("planeta1").value.toLowerCase();
  let planeta2=document.getElementById("planeta2").value.toLowerCase();
  let planeta3=document.getElementById("planeta3").value.toLowerCase();

  let arrayPlanet=[];
  let listaComprobar=[planeta1,planeta2,planeta3];
  for (let j=0;j<listaComprobar.length;j++){
      for(let i=0;i<sistemaSolar.length;i++){
          if(sistemaSolar[i].nombre==listaComprobar[j]){
              arrayPlanet.push(sistemaSolar[i]);
          }
      }
  }
  if(arrayPlanet.length<3){
      document.getElementById("planets").innerHTML='<h1>Has introducido algún planeta no válido.</h1>';
  }
  else if(arrayPlanet[0]==arrayPlanet[1]||arrayPlanet[0]==arrayPlanet[2]|| arrayPlanet[1]==arrayPlanet[2]){
      document.getElementById("planets").innerHTML='<h1>Has introducido algún planeta repetido.</h1>';
  }
  else{
      for (let j=0;j<arrayPlanet.length;j++){
          console.log(arrayPlanet[j].fondo);
          mostrarPlaneta(arrayPlanet[j].nombre,arrayPlanet[j].color,arrayPlanet[j].temperatura, arrayPlanet[j].imagen,'planet'+j, arrayPlanet[j].fondo);
       }
  }
}

function mostrarPlaneta(nombre, color, temperatura, imagen,id,fondo){
  document.getElementById("planets").innerHTML+="<div class=card id="+id+"></div>";
  document.getElementById(id).innerHTML+="<h1>"+nombre+"</h1>";
  document.getElementById(id).innerHTML+="<img src="+imagen+" alt='planeta'>";
  document.getElementById(id).innerHTML+=
  `<ul>
  <li>`+'<b>Color: </b>'+color+`</li>
  <li>`+'<b>Temperatura: </b>'+temperatura+`</li>
  </ul>`;
  document.getElementById(id).innerHTML+=`<button onclick="document.getElementById('${id}').style.backgroundColor='${fondo}'">Fondo</button>`;
 
}
