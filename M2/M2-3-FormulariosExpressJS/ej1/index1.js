/* 1. Crear una aplicación de servidor que tenga una lista de animales (un array con
    objetos) que tendrán nombre, edad y tipo de animal. Cuando vayamos a la raíz (ruta
    '/’) el servidor devolverá el HTML de la lista de animales. */
    const express=require('express');
    const app = express();
    app.listen(3000);
    let listaAnimales=require('./animales');

    app.get('/animales', function(request,response){

let tabla=`<table border="2">
    <tr>
    <th colspan="3">ANIMALES</th>
    </tr>
    <tr>
    <th>NOMBRE</th>
    <th>EDAD</th>
    <th>TIPO</th>
    </tr>`
    for(let i=0;i<listaAnimales.length;i++){

        tabla+=`<tr>
        <th>${listaAnimales[i].nombre}</th>
        <th>${listaAnimales[i].edad}</th>
        <th>${listaAnimales[i].tipo}</th>
        </tr>`
    
    };
    tabla+=`</table>`
    response.send(tabla);
});

