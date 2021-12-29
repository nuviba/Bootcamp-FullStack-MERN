/* 1. Rick & Morty
Haz una llamada a la API https://rickandmortyapi.com/api/character/ para que
devuelva todos los personajes. Muestra en un div las fotos y los nombres. */

fetch('https://rickandmortyapi.com/api/character/').then(function cogerRespuesta(respuesta){
return respuesta.json()
}).then(function cogerData(data){
    for(let i=0; i<data.results.length; i++)
    {
        let nombre=data.results[i].name;
        let foto=data.results[i].image;
        plantillaRickMorty(nombre,foto,i);

    }
    
})

function plantillaRickMorty(nombre,foto,id){
    document.getElementById("plantilla").innerHTML+="<div id="+id+"></div>";
    document.getElementById(id).innerHTML+=`<img src=${foto} alt="foto persona">`;
    document.getElementById(id).innerHTML+="<h1>"+nombre+"</h1>";
    document.getElementById(id).style.display="flex";
    document.getElementById(id).style.flexDirection="column";
    document.getElementById(id).style.alignItems="center";
    document.getElementById(id).style.width="30%";
    document.getElementById(id).style.paddingTop="15px";
    document.getElementById(id).style.boxShadow="0 10px 20px 0 rgba(0, 0, 0, 0.5)";
    document.getElementById(id).style.borderRadius="10px";
    document.getElementById("plantilla").style.display="flex";
    document.getElementById("plantilla").style.justifyContent="center";
    document.getElementById("plantilla").style.flexWrap="wrap";
    document.getElementById(id).style.margin="15px";
}