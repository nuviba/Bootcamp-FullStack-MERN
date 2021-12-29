/* 3. Si no habéis creado un formulario para enviar la información a la ruta
‘/sumar-animal’, Crear una tercera ruta ('/dejar-animal') en la que mostraremos un
formulario en el que el usuario de la página puede introducir el nombre, el tipo y la
edad de un animal. Cuando se haga click en el botón del formulario, se enviará la
información introducida a la ruta ('/sumar-animal'). Si ya habéis creado el
formulario, no hace falta este paso.*/
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
    app.get('/dejar-animal', function(request,response){
        let formularioAnimal=
        `<h1>INTRODUCE UN NUEVO ANIMAL</h1>
        <form action="/sumar-animal">
            <input type="text" name="nombre" placeholder="Introduce el nombre"/>
            <input type="text" name="edad" placeholder="Introduce la edad"/>
            <input type="text" name="tipo" placeholder="Introduce el tipo" />
            <button type="submit">Enviar</button>
        </form>`

        response.send(formularioAnimal);
    });
