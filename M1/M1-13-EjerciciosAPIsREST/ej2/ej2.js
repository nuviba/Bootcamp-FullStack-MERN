/* 2. Random User
Usa la api https://randomuser.me/ para generar un usuario aleatorio. Crea un div en
el que aparezca la foto, el nombre, el email, la dirección (street name, street number,
city, state, country, postcode) */
fetch('https://randomuser.me/api/').then(function cogerRespuesta(respuesta){
return respuesta.json();
}).then(function cogerData(data){
    let resultado=data.results;

    let titleName=resultado[0].name.title;
    let firstName=resultado[0].name.first;
    let lastName=resultado[0].name.last;
    let fullName=titleName+" "+firstName+" "+lastName;
    
    let correo=resultado[0].email;

    let streetName=resultado[0].location.street.name;
    let streetNumber=resultado[0].location.street.number;
    let city=resultado[0].location.city;
    let state=resultado[0].location.state;
    let country=resultado[0].location.country;
    let postcode=resultado[0].location.postcode;
    let fullDirection=streetName+" "+streetNumber+" "+city+" "+state+" "+country+" "+postcode;

    let foto=resultado[0].picture.large;
    plantillaPersonas(fullName,foto,correo,fullDirection,"persona");
    
})

function plantillaPersonas(nombre,foto,correo,direccion,id){
    document.getElementById("plantilla").innerHTML+="<div id="+id+"></div>";
    document.getElementById(id).innerHTML+=`<img src=${foto} alt="foto persona">`;
    document.getElementById(id).innerHTML+="<h1>"+nombre+"</h1>";
    document.getElementById(id).innerHTML+=`
    <p>${correo}</p>
    <p>${direccion}</p>`;
    document.getElementById(id).style.display="flex";
    document.getElementById(id).style.flexDirection="column";
    document.getElementById(id).style.alignItems="center";
    document.getElementById(id).style.paddingTop="15px";
    document.getElementById(id).style.paddingLeft="15px";
    document.getElementById(id).style.paddingRight="15px";
    document.getElementById(id).style.boxShadow="0 10px 20px 0 rgba(0, 0, 0, 0.5)";
    document.getElementById(id).style.borderRadius="10px";
    document.getElementById("plantilla").style.display="flex";
    document.getElementById("plantilla").style.justifyContent="center";
    document.getElementById("plantilla").style.flexWrap="wrap";
    document.getElementById(id).style.margin="15px";
}