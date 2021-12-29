/* 2. Crear una segunda ruta ('/sumar-animal') que recibirá por query el nombre, el tipo y
la edad de un animal. Al recibirlo, se creará un objeto de animal con su información y
se añadirá a la lista de animales en el servidor.*/
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

    app.get('/sumar-animal', function(request,response){
        let nombre=request.query.nombre;
        let edad=request.query.edad;
        let tipo=request.query.tipo;

        let animalNuevo={'nombre':nombre,'edad':edad,'tipo':tipo};
        listaAnimales.push(animalNuevo);
        response.send('<h1>Animal añadido a la lista</h1>');
    });
