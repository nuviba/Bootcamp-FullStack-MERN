/* 

<button onclick="eliminarDatosDel()">Eliminar</button> */

fetch("/api/libros")
.then((res) => res.json())
.then((data) => {

let tabla=`<table border="2">
            <tr>
            <th colspan="4">HISTORIAL LIBROS</th>
            </tr>
            <tr>
            <th>TÍTULO</th>
            <th>ESTADO</th>

            </tr>`
            for(let i=0;i<data.length;i++){
                tabla+=`<tr>
                <th>${data[i].Titulo}</th>
                <th>${data[i].Estado}</th>
                <th><button onclick="modificarDatosPut('${data[i].Titulo}')">Libro Leído</button></th>
                <th><button onclick="eliminarDatosDel('${data[i].Titulo}')">Eliminar</button></th>
                </tr>`
            };

            tabla+=`</table>`
            document.getElementById("lista").innerHTML=tabla;
            
  });

  function enviarDatosPost(){
    let titulo= document.getElementById("titulo").value;
    
    fetch(`/api/nuevoLibro/${titulo}`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
    })
    location.reload();
}

function modificarDatosPut(titulo){
    fetch(`/api/editarLibro/${titulo}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
    })
    location.reload();
}
function eliminarDatosDel(titulo){
    fetch(`/api/borrarLibro/${titulo}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json"
        },
    })
    location.reload();
}

