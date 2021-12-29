/* 2. Crea una aplicación con una ruta a la que le puede llegar un parámetro en la url. Al
hacer una petición get a esa ruta, el servidor devolverá como respuesta un número
aleatorio entre 1 y el número que llega como parámetro. */
const express=require('express');
const app = express();
app.listen(3000);

app.get('/:num', function(request, response) {
    let numero= request.params.num;
    let numRan=Math.floor(Math.random() * (numero - 1) + 1);
    response.send(`<h1>El número aleatorio es: ${numRan}</h1>`);
    });