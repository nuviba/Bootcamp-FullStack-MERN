/* 5. Añadir un botón que diga adoptar y mostrarlo en la lista de animales que se muestra
en la raíz (un botón por animal, con un campo name con el valor del nombre del
animal), cuando pulsemos el botón, se enviará el formulario a la ruta ('/adoptar').*/
    const express=require('express');
    const app = express();
    app.listen(3000);
    let listaAnimales=require('./animales');

    app.get('/animales', function(request,response){

        let tabla=`<table border="2">
        <tr>
        <th colspan="4">ANIMALES</th>
        </tr>
        <tr>
        <th>NOMBRE</th>
        <th>EDAD</th>
        <th>TIPO</th>
        <th>ADOPTAR</th>
        </tr>`
        for(let i=0;i<listaAnimales.length;i++){
            tabla+=`<tr>
            <th>${listaAnimales[i].nombre}</th>
            <th>${listaAnimales[i].edad}</th>
            <th>${listaAnimales[i].tipo}</th>
            <th>
            <form action="/adoptar/">
            <button name=nombre value=${listaAnimales[i].nombre} type="submit">Adoptame</button> </form>
            </th>
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
    app.get('/adoptar', function(request,response){
        let nombre=request.query.nombre;
        let respuesta;
        nombre=nombre.toLowerCase();
        for(let i=0;i<listaAnimales.length;i++){
            if(nombre==listaAnimales[i].nombre.toLowerCase()){
                listaAnimales.splice(i,1);
                respuesta=`¡Has adoptado a ${nombre}.Cuidal@ mucho!`;
                break;
            }
            else{
                respuesta=`No hay ningún animal con el nombre: ${nombre}`;
            }
            
        }

        response.send(respuesta);
    });
