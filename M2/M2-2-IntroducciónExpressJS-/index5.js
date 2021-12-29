/* 5- Define un objeto con las siguientes propiedades: nombre, apellidos y edad. El objeto estará fuera de las rutas para que sea accesible por todas ellas. Crea una aplicación en la que se pueda modificar cualquiera de las propiedades de ese objeto utilizando peticiones de tipo get. Crea una ruta para cambiar el nombre, otra ruta para el apellido y otra ruta para la edad.  */

let persona={nombre:"Nuria",apellido:"Villalba",edad:27};
const express=require('express');
const app = express();
app.listen(3001);

app.get('/persona', function(request,response) {
    
    response.send(`<h4>Nombre: ${persona.nombre}<br>Apellido: ${persona.apellido}<br>Edad: ${persona.edad}</h4>`);
    });
 app.get('/persona/nombre/:parametro', function(request,response) {
     let nombre=request.params.parametro;
     persona.nombre=nombre;
     response.send("<h1>Nombre cambiado</h1>");

    });

app.get('/persona/apellido/:parametro', function(request,response) {
    let apellido=request.params.parametro;
     persona.apellido=apellido;
     response.send("<h1>Apellido cambiado</h1>");
    });
app.get('/persona/edad/:parametro', function(request,response) {
    let edad=request.params.parametro;
    persona.edad=edad;
    response.send("<h1>Edad cambiada</h1>");
    });
 