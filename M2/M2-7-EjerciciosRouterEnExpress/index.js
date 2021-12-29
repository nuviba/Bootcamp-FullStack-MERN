/* Vamos a crear una aplicación que permita llevar el registro tanto de las habitaciones como de los clientes de un hotel. Estas son las funcionalidades que queremos que el programa cumpla:

Diseño de la BBDD:

Colección Clientes: 
Nombre
Apellido
DNI

Colección Habitaciones (Aquí tendréis que introducir 8 habitaciones)
Nº habitación
Estado

Colección reservas:
Cliente
Habitación
Fecha Check In
Fecha CheckOut

Hacer que el servidor devuelva los datos en formato JSON a peticiones a través de Postman en primer lugar. Tendremos las siguientes opciones que podremos pasar al servidor en primer lugar:

Registrar cliente: Aquí registramos un nuevo cliente, puesto que no se puede reservar una habitación si previamente no se ha registrado al cliente. Recibiremos los datos de nombre, apellido y DNI y añadiremos los datos a la colección de Clientes. Comprobar, que el cliente es único y no está previamente registrado.

Editar cliente: Tendremos la opción de cambiar el nombre y el apellido de un cliente que ya está registrado en la BBDD. Tendremos una ruta en la que podremos indicar el dni de un usuario y los datos a modificar.	

Check-in: Aquí enviaremos el DNI del cliente que quiere hacer la reserva y la habitación en la que quiere hospedarse. Si el cliente no existe devolverá un mensaje que nos indique que el cliente no está registrado y por lo tanto no puede hacer una reserva. Si la habitación no está disponible, devolverá un mensaje de que la habitación no está disponible y por lo tanto no puede hacer la reserva. Si todo está correcto, añadiremos a la colección RESERVAS tanto el cliente como la habitación reservada y pondremos la habitación en la colección HABITACIONES con su estado a ocupado.

Checkout: Crea una ruta que reciba el DNI del cliente. Si el DNI es correcto, se cambiará la reserva para indicar la fecha fin de la reserva y la habitación pasará a estado libre.
 */

const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;

MongoClient.connect( "mongodb://localhost:27017", function(err, client){
    if(err!=null) {
        console.log(err);
        console.log("no se ha podido conectar con mongo");
    } 
    else {
        app.locals.db= client.db("hotel");
        console.log("🟢 MongoDB conectado");
    }});

let clientes=require('./clientes');
let habitaciones=require('./habitaciones');
let reservas=require('./reservas');

app.use('/clientes',clientes);
app.use('/habitaciones',habitaciones);
app.use('/reservas',reservas);

app.listen(process.env.PORT || 3002);

