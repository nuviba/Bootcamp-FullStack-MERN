/* Crea una aplicación express con un index.js y un archivo .js aparte en el que tendrás una función saludarEnExpress que devuelva un string. Importa este módulo en el index.js y crea una ruta para que cada vez que se haga una petición get a esa ruta, se muestre el string que nos devuelve la función. */
let modulo= require ('./saludarEnExpress');
const express=require('express');
const app = express();



app.get('/saludo', function(request,response) {
    
    response.send(modulo.saludarEnExpress());
    });

app.listen(3001);
