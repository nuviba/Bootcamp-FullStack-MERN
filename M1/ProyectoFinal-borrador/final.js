/* Crear un website donde puedan ver información sobre datos obtenidos de internet que constará de al menos 3 páginas, una página "Acerca de", una página de búsqueda, y una página principal. Las características deberán ser: 
En el menú de navegación tiene que distinguirse la página actual.
La página de búsqueda tendrá un formulario para realizar búsquedas. Al realizar la búsqueda se mostrarán los resultados y el usuario tendrá la posibilidad de indicar qué le gusta. Hacer esto añadirá esos datos a una lista de preferencias del usuario, que será visible al volver a entrar en la página.
Todas las páginas deberán utilizar el mismo archivo CSS para sus estilos.
La página deberá ser responsiva y contar con al menos dos layouts distintos (uno móvil y uno de escritorio).

Requisitos mínimos del proyecto modular:
Hacer mock-up.
Uso semántico del HTML para indicar las distintas partes de cada una de las páginas.
Clara separación entre el contenido y los elementos de estilo (HTML y CSS).
Uso de fetch para obtener información de una API web.
Indicación de error al usuario en caso de fallo en la llamada a la API.
Uso de LocalStorage para guardar la información en el navegador.
Uso de JavaScript  para seleccionar los objetos que queremos guardar en el localStorage. */


function searchByCategory (tipo){
    fetch('https://botw-compendium.herokuapp.com/api/v2').then(function cogerRespuesta(respuesta){
        return respuesta.json()
        })
        .then(function cogerData(data){
            let catSelect=document.getElementById("selectCategory").value;
            let catObject;
            
            if(catSelect=="creatures-food"){
                catObject=data.data.creatures.food;
            }
            else if(catSelect=="creatures-non-food"){
                catObject=data.data.creatures.non_food;
            }
            else{
                catObject=data.data[catSelect];
            }
            document.getElementById("templateCard").innerHTML="";
    switch(tipo){
        case `name`:
            searchByName(catObject);
            break;
        case `location`:
            searchByLoc(catObject);
            break;
        case `description`:
            searchByDes(catObject);
            break;
        default:

        
    }
})
}

function searchByName(lista){
    buscar=document.getElementById("searchNam").value;
    for (let i=0;i<lista.length;i++){
        if(lista[i].name.toLowerCase().includes(buscar.toLowerCase())){
            templateCard(i,lista[i])}
    }
    
return 1;}

function searchByLoc(lista){
    buscar=document.getElementById("searchLoc").value;
    
    for (let i=0;i<lista.length;i++){
        if(lista[i].common_locations!=null){
            for(let j=0;j<lista[i].common_locations.length;j++){
                if(lista[i].common_locations[j].toLowerCase().includes(buscar.toLowerCase())){
                    templateCard(i,lista[i])
                    break;}
            }           
            }
        } 
return 1;}

function searchByDes(lista){
    buscar=document.getElementById("searchDes").value;
    for (let i=0;i<lista.length;i++){
        if(lista[i].description.toLowerCase().includes(buscar.toLowerCase())){
            templateCard(i,lista[i])}
    }    
return 1;}

function allFromCategory (){
    fetch('https://botw-compendium.herokuapp.com/api/v2').then(function cogerRespuesta(respuesta){
        return respuesta.json()
        })
        .then(function cogerData(data){
            let catSelect=document.getElementById("selectCategory").value;
            let catObject;
            
            if(catSelect=="creatures-food"){
                catObject=data.data.creatures.food;
            }
            else if(catSelect=="creatures-non-food"){
                catObject=data.data.creatures.non_food;
            }
            else{
                catObject=data.data[catSelect];
            }
            document.getElementById("templateCard").innerHTML="";
            for (let i=0;i<catObject.length;i++){
                templateCard(i, catObject[i]);
            }
        })

};

function templateCard(id, objeto){
    
    document.getElementById("templateCard").innerHTML+="<div class=card id="+id+"></div>";
    document.getElementById(id).innerHTML+=`<img src=${objeto.image} alt="zelda objet">`;
    document.getElementById(id).innerHTML+="<h1>"+objeto.name+"</h1>";
        if(objeto.common_locations!=null){
            document.getElementById(id).innerHTML+=("<p><b>Locations: </b> "+objeto.common_locations+"</p>").replace(",",", ");}
    let catSelect= document.getElementById("selectCategory").value;
    switch(catSelect){
        case `creatures-food`:
            document.getElementById(id).innerHTML+="<p><b>Cooking effect: </b>"+objeto.cooking_effect+"</p>";
            document.getElementById(id).style.background="#fbeddfb2";
            document.getElementById(id).style.border="solid #c58f99";
            break;
        case `creatures-non-food`:
            document.getElementById(id).innerHTML+=("<p><b>Drop: </b>"+objeto.drops+"</p>").replace(",",", ");
            document.getElementById(id).style.background="#fbeddfb2";
            document.getElementById(id).style.border="solid #2b4173";
            break;
        case `equipment`:
            document.getElementById(id).innerHTML+="<p><b>Attack: </b>"+objeto.attack+"</p>";
            document.getElementById(id).innerHTML+="<p><b>Defense: </b>"+objeto.defense+"</p>";
            document.getElementById(id).style.background="#fbeddfb2";
            document.getElementById(id).style.border="solid #471f18";
            break;
        case `materials`:
            document.getElementById(id).innerHTML+="<p><b>Cooking effect: </b>"+objeto.cooking_effect+"</p>";
            document.getElementById(id).innerHTML+="<p><b>Hearts recovered: </b>"+objeto.hearts_recovered+"</p>";
            document.getElementById(id).style.background="#fbeddfb2";
            document.getElementById(id).style.border="solid #4c94b4";
            break;
        case `monsters`:
            document.getElementById(id).innerHTML+=("<p><b>Drop: </b>"+objeto.drops+"</p>").replace(",",", ");
            document.getElementById(id).style.background="#fbeddfb2";
            document.getElementById(id).style.border="solid #5a4c84";
            break;
        case `treasure`:
            document.getElementById(id).innerHTML+=("<p><b>Drop: </b>"+objeto.drops+"</p>").replace(",",", ");
            document.getElementById(id).style.background="#fbeddfb2";
            document.getElementById(id).style.border="solid #ba9b63";
            break;
        default: 
    }
    document.getElementById(id).innerHTML+="<p>"+objeto.description+"</p>";

}

$(document).ready(function(){
	$('.heart').on('click',function(){
		$(this).toggleClass("heart_animate");
	});
});
