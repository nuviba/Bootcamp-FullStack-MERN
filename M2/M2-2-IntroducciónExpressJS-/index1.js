/* 1. Crea una aplicación express con una llamada de tipo get que devuelve el siguiente
HTML:Hola Mundo desde express */
const express=require('express');
const app = express();
app.listen(3000);

app.get('/', function(request, response) {
    response.send('<h1>Hola Mundo</h1><br><h3>desde express</h3>');
    });