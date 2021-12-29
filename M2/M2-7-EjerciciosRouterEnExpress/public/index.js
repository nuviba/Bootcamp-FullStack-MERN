mostrarDatos()

function enviarDatosPost(){
    let nombre= document.getElementById("nombre").value;
    let apellido= document.getElementById("apellido").value;
    let dni= document.getElementById("dni").value;
    let cliente={"nombre":nombre,"apellido":apellido,"dni":dni};
    fetch("/clientes/registro",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
    }).then((res) => res.json())
    .then(function (datos) {
            document.getElementById("nombreRegistrado").innerHTML=datos.mensaje;
    });
}

function enviarDatosPut(){
    let nombreM= document.getElementById("nombreM").value;
    let apellidoM= document.getElementById("apellidoM").value;
    let dniM= document.getElementById("dniM").value;

    let cliente={}
    cliente.dni=dniM;
        if (nombreM!=""){
            cliente.nombre=nombreM
        }
        if (apellidoM!=""){
            cliente.apellido=apellidoM
        }
    fetch(`/clientes/modificar`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
    
    }).then((res) => res.json())
    .then(function (datos) {
            document.getElementById("userModificado").innerHTML=datos.mensaje;
    });
    
}

function mostrarDatos(){
    fetch(`/habitaciones`,{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((data) => {let tabla=`<table border="2">
    <tr>
    <th colspan="6">HABITACIONES</th>
    </tr>
    <tr>
        <th>NÚMERO HABITACIÓN</th>
        <th>ESTADO</th>
    </tr>`
    for(let i=0;i<data.length;i++){
    tabla+=`<tr>
    <th>${data[i].numHab}</th>
    <th>${data[i].estado}</th></tr>`
    }
    tabla+=`</table>`
    document.getElementById("listaHabitaciones").innerHTML=tabla;
    
});

}

function reservaHabitacion(){
    let nombre= document.getElementById("nombreR").value;
    let apellido= document.getElementById("apellidoR").value;
    let dni= document.getElementById("dniR").value;
    let numHab=document.getElementById("numHabR").value;
    let fechaCi=document.getElementById("checkIn").value;
    let fechaCo=document.getElementById("checkOut").value;
    let reserva={"nombre":nombre,"apellido":apellido,"dni":dni,"numHab":numHab,"fechaCi":fechaCi,"fechaCo":fechaCo};

    fetch("/reservas/registro",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reserva)
    }).then((res) => res.json())
    .then(function (datos) {
            document.getElementById("reservaRealizada").innerHTML=datos.mensaje;
            mostrarDatos();
    });
}
function anularReserva(){
    let dni= document.getElementById("dniD").value;
    fetch("/reservas/check-out",{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"dni":dni})
    }).then((res) => res.json())
    .then(function (datos) {
            document.getElementById("checkOutrealizado").innerHTML=datos.mensaje;
            mostrarDatos();
    });
}