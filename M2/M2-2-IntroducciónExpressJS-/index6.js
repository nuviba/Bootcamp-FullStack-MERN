/* 6. Declara un array con los nombres de l@s estudiantes del Bootcamp. Crea una
aplicación en la que se puedan añadir elementos a ese array mediante el método
get. Entonces agrega los nombres de los profesores. */

let estudiantes=["Neus","Cristina","Jessica","Carlos","Silvia","Edgardo","Guille","Nuria"];
const express=require('express');
const app = express();
app.listen(3001);

app.get('/miembrosBootcamp', function(request,response) {
    
    let listaEstudiantes=" ";
    for(let i=0;i<estudiantes.length;i++){
        listaEstudiantes+=estudiantes[i]+`<br>`;
    }
    response.send(`<h1>Los miembros del Bootcamp son:</h1><br>${listaEstudiantes}`);

   });
app.get('/miembrosBootcamp/:parametro', function(request,response) {
    let profesor=request.params.parametro;
    estudiantes.push(profesor);
    
    response.send("<h3>Miembro añadido</h3>");
    });

