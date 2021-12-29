/* 5. Pokemons por tipo
a. Obtener de la API de Pokemon (disponible enhrom/api/v2) la lista de todos
los tipos de Pokémon y mostrarlos en consola.
b. Mostrar un dropdown de HTML en el que el usuario puede especificar un
tipo.
c. Cuando el usuario elija un tipo específico en el dropdown, mostrar 3
pokemons aleatorios que sean de ese tipo. */
let pokeType=[];
let pokeUrl=[];
fetch('https://pokeapi.co/api/v2/type/').then(function cogerRespuesta(respuesta){
return respuesta.json()
}).then(function cogerData(data){
    document.getElementById("tipoPokemon").innerHTML+=`<option value=-1>Selecciona</option>`
    for(let i=0; i<data.results.length; i++)
    {
        let nombre=data.results[i].name;
        pokeType[i]=data.results[i];
        pokeUrl[i]=data.results[i].url;
        document.getElementById("tipoPokemon").innerHTML+=`<option value=${i}>${nombre}</option>`
        document.getElementById("tipoPokemon").style.textTransform="capitalize";
    }
})
function mostrarPokemon(){
    let pos=document.getElementById("tipoPokemon").value;
    document.getElementById("plantilla").innerHTML=`<h3>Tres Pokemon tipo ${pokeType[pos].name}:</h3>
        `;
    document.getElementById("plantilla").innerHTML+=` <ul id=listaPokemon></ul>`;
    
    fetch(`${pokeUrl[pos]}`).then(function cogerRespuesta(respuesta){
        return respuesta.json()
        }).then(function cogerData(data){
        
        let arraiPokemon=data.pokemon;
        let posRandom;
        let pokemon1;
        /* for(let i=0;i<arraiPokemon.length;i++){
            let nombre=arraiPokemon[i].pokemon.name
            document.getElementById("listaPokemon").innerHTML+=`<li>${nombre}</li>`;
            document.getElementById("listaPokemon").style.textTransform="capitalize";}
        }) */
        
        for(let i=0;i<3;i++){
            posRandom=Math.floor(Math.random() * (arraiPokemon.length - 0)) + 0;
            pokemon1=arraiPokemon[posRandom].pokemon.name;
            document.getElementById("listaPokemon").innerHTML+=`<li>${pokemon1}</li>`;}
        document.getElementById("listaPokemon").style.textTransform="capitalize";
    })

    
    
}