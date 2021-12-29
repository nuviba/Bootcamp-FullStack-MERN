/* 6. Cartas de magic
a. Para este ejercicio utilizaremos la base de datos de Magic disponible en
https://magicthegathering.io/ . En primer lugar mostrar un dropdown en el que
se muestran los set de cartas disponibles
b. Cuando el usuario elige un ítem, hacemos una petición a la api con el set y
que nos devuelva las cartas, si la petición fuera a devolver más de 100,
utilizar solo las 100 que llegan. Mostrar cada una de ellas en un div con su
título, su descripción y su imágen si existen. Cuando el usuario pase el ratón
por encima de una carta, hacer que rote ligeramente (buscar la propiedad css
transform) */
let codeSet=[];

fetch('https://api.magicthegathering.io/v1/sets').then(function cogerRespuesta(respuesta){
return respuesta.json()
}).then(function cogerData(data){
    document.getElementById("setCards").innerHTML+=`<option value=-1>Selecciona</option>`
    for(let i=0; i<data.sets.length; i++)
    {
        let nombre=data.sets[i].name;
        codeSet[i]=data.sets[i].code;
        document.getElementById("setCards").innerHTML+=`<option value=${i}>${nombre}</option>`
        document.getElementById("setCards").style.textTransform="capitalize";
    }
})

function mostrarCards (){
    let pos=document.getElementById("setCards").value;
    let code=codeSet[pos];
    let tituloCard;
    let descCard;
    let imgCard;
    fetch('https://api.magicthegathering.io/v1/cards?set='+code).then(function cogerRespuesta(respuesta){
        return respuesta.json()
        }).then(function cogerData(data){
            for (let i=0;i<data.cards.length;i++){
                tituloCard=data.cards[i].name;
                descCard=data.cards[i].text;
                imgCard=data.cards[i].imageUrl;
                document.getElementById("baraja").innerHTML+=`<div class=styleCard id=card${i}></div>`;
                document.getElementById(`card${i}`).innerHTML+=`<img src=${imgCard} alt="carta Magic">`;
                document.getElementById(`card${i}`).innerHTML+=`<h3>${tituloCard}</h3>`;
                document.getElementById(`card${i}`).innerHTML+=`<p>${descCard}</p>`;


            }
            })
}