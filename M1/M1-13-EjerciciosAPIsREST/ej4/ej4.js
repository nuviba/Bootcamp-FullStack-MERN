/* 4. Personajes de Star Wars por planeta
a. Utilizar la base de datos de Star Wars (disponible en
https://swapi.dev/documentation), para obtener la lista de planetas y
mostrarlos en un dropdown (etiqueta select).
b. Cuando el usuario elige una opción, mostrar un alert con el nombre del
planeta seleccionado (podéis usar un botón para ello).
c. En vez de mostrar el alert, hacer una petición fetch para ver los personajes
que están en ese planeta y mostrarlos en un div debajo del dropdown.
d. Hacer la petición fetch en cuanto se selecciona una opción diferente, sin
utilizar el botón (buscar en internet documentación sobre eventos que se
ejecutan cuando se cambia la selección)< */


{/* <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> */}
let planetaList=[];
fetch('https://swapi.dev/api/planets/').then(function cogerRespuesta(respuesta){
return respuesta.json()
}).then(function cogerData(data){
    for(let i=0; i<data.results.length; i++)
    {
        let nombre=data.results[i].name;
        planetaList[i]=data.results[i];
        document.getElementById("sleccionPlaneta").innerHTML+=`<option value=${i}>${nombre}</option>`
    }
    //mostrarPersonaje(data.results[2])    
})

function buscarPers(){
    let pos=document.getElementById("sleccionPlaneta").value;
    let planeta=planetaList[pos]
    mostrarPersonaje(planeta);
}

function mostrarNombre(){
    pos=document.getElementById("sleccionPlaneta").value;
    alert(planetaList[pos].name)
}

function mostrarPersonaje(planeta){
    let personajes=planeta.residents;
    if(personajes.length==0){
        document.getElementById("plantilla").innerHTML=`<h3>En este planeta no residen personajes</h3>`;
    }
    else{
        document.getElementById("plantilla").innerHTML=`<h3>Los personajes del planeta ${planeta.name} son:</h3>
        `;
        document.getElementById("plantilla").innerHTML+=` <ul id=listaPers></ul>`;
        for (let i=0;i<personajes.length;i++){
            fetch(personajes[i]).then(function cogerRespuesta(respuesta){
                return respuesta.json()
                }).then(function cogerData(data){
                    document.getElementById("listaPers").innerHTML+=`<li>${data.name}</li>`;
                })
            }
    }
   

}


