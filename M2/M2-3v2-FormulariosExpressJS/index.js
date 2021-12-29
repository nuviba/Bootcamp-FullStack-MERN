/* 1. Crear una aplicación de servidor que tenga una lista de animales (un array con
objetos) que tendrán nombre, edad y tipo de animal. Cuando vayamos a la raíz (ruta
'/’) el servidor devolverá el HTML de la lista de animales.
2. Crear una segunda ruta ('/sumar-animal') que recibirá por query el nombre, el tipo y
la edad de un animal. Al recibirlo, se creará un objeto de animal con su información y
se añadirá a la lista de animales en el servidor.
3. Si no habéis creado un formulario para enviar la información a la ruta
‘/sumar-animal’, Crear una tercera ruta ('/dejar-animal') en la que mostraremos un
formulario en el que el usuario de la página puede introducir el nombre, el tipo y la
edad de un animal. Cuando se haga click en el botón del formulario, se enviará la
información introducida a la ruta ('/sumar-animal'). Si ya habéis creado el
formulario, no hace falta este paso.
4. Crear una ruta ('/adoptar') que recibe un nombre de animal por parámetro de query.
Cuando llegue una petición a esta ruta, eliminaremos el animal con este nombre de
la lista de animales que hay en el servidor.
5. Añadir un botón que diga adoptar y mostrarlo en la lista de animales que se muestra
en la raíz (un botón por animal, con un campo name con el valor del nombre del
animal), cuando pulsemos el botón, se enviará el formulario a la ruta ('/adoptar').*/
    const express=require('express');
    let app = express();
    
    app.use(express.static('public'));


    let listaAnimales=require('./animales');

    app.get('/animales', function(request,response){
        response.send(listaAnimales);
    });

    /* app.get('/animales', function(request,response){

        
        response.send(tabla);
    }); */

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

app.listen(process.env.PORT || 3001);