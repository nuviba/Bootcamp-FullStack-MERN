const { json } = require("express");

function enviarDatosPost(){
    let tamaño= document.getElementById("tamaño").value;
    let color= document.getElementById("color").value;
    let material= document.getElementById("material").value;
    let patas= document.getElementById("patas").value;
    let mesa={'Tamaño':tamaño,'Color': color,'Material': material, 'Patas': patas}
    fetch("/api/anyadir",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mesa)
    })
    location.reload();
}

function enviarDatosPut(){
    let color= document.getElementById("colorPut").value;
    fetch(`/api/modificar/:${color}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
    })
    location.reload();
}

function enviarDatosDel(){
    let patas= document.getElementById("patasDel").value;
    fetch(`/api/borrar/:${patas}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json"
        },
    })
    location.reload();
}

function mostrarDatos(){
    fetch(`/api/mesas`,{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((data) => {let tabla=`<table border="2">
    <tr>
    <th colspan="2">INVENTARIO MESAS</th>
    </tr>
    <tr>
    <th>TAMAÑO</th>
    <th>COLOR</th>
    <th>MATERIAL</th>
    <th>Nº PATAS</th>

    </tr>`
    for(let i=0;i<data.length;i++){
        tabla+=`<tr>
        <th>${data[i].Tamaño}</th>
        <th>${data[i].Color}</th>
        <th>${data[i].Material}</th>
        <th>${data[i].Patas}</th>
        </tr>`
    };

    tabla+=`</table>`
    document.getElementById("lista").innerHTML=tabla;
    
});

}