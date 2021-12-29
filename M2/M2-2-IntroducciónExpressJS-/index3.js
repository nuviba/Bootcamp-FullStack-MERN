/* 3. Crea un array de 5 nombres. Define dos rutas: una será del tipo “/persona” y la otra
será /persona/:parámetro’. Al entrar a la primera ruta nos devolverá la lista de
personas y al entrar a la segunda nos devolverá la persona solicitada. */

const express=require('express');
const app = express();
app.listen(3000);

let persona=["Pepe","Amparo","Josep","Nuria","Hector"]

app.get('/persona', function(request,response) {
    let respuesta=""
    for (let i=0;i<persona.length;i++){
        respuesta+=`<li>${persona[i]}</li>`;
    }
    response.send(`<ul>${respuesta}</ul>`);
    });

app.get('/persona/:parametro', function(request, response) {
    let nombre=request.params.parametro;
    let respuesta;
    
    for (let i=0;i<persona.length;i++){
        if(nombre==persona[i])
        {
        respuesta=`<h3>${persona[i]}</h3>`;
        break;
        }
        else{
        respuesta=`<h3>Nombre no encontrado</h3>`
        }
    }
    response.send(respuesta);
    }); 