fetch("/personas")
.then((res) => res.json())
.then((data) => {

let tabla=`<table border="2">
            <tr>
            <th colspan="3">USUARIOS</th>
            </tr>
            <tr>
            <th>NOMBRE</th>
            <th>PRIMER APELLIDO</th>
            <th>EDAD</th>
            </tr>`
            for(let i=0;i<data.length;i++){
                tabla+=`<tr>
                <th>${data[i].nombre}</th>
                <th>${data[i].apellido}</th>
                <th>${data[i].edad}</th>
                </tr>`
            };

            tabla+=`</table>`
            document.getElementById("lista").innerHTML=tabla;
            
  });

function enviarDatosPost(){
    let nombre= document.getElementById("nombre1").value;
    let apellido= document.getElementById("apellido1").value;
    let edad= document.getElementById("edad1").value;
    let persona={'nombre':nombre,'apellido': apellido,'edad': edad}
    fetch("/post",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(persona)
    })
    location.reload();
}

function enviarDatosPut(){
    let nombre= document.getElementById("nombre2").value;
    let apellido= document.getElementById("apellido2").value;
    let edad= document.getElementById("edad2").value;
    let persona={'nombre':nombre,'apellido': apellido,'edad': edad}
    fetch("/put",{
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(persona)
    })
    location.reload();
}

function enviarDatosDel(){
    let nombre= document.getElementById("nombre3").value;
    let apellido= document.getElementById("apellido3").value;
    let edad= document.getElementById("edad3").value;
    let persona={'nombre':nombre,'apellido': apellido,'edad': edad}
    fetch("/delete",{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(persona)
    })
    location.reload();
}

