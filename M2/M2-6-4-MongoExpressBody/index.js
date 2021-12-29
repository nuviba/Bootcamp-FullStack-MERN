/* Crea una aplicación para gestionar menús de un restaurante. Cada menú tendrá 5
propiedades:
● Número de menú
● Primer plato
● Postre
● Segundo plato
● Precio
Requisitos
● Crea una ruta GET /api/menus para obtener todos los menús
● Crea una ruta POST /api/nuevoMenu para añadir un nuevo menú. Desde el
navegador manda un objeto con las 5 propiedades y, en el servidor, introduce ese
objeto en la base de datos
● Crea una ruta PUT /api/editarMenu para modificar un menú existente. Envía un
objeto al servidor en el body de la petición, recoge ese objeto en el servidor
(req.body, recuerda añadir el app.use correspondiente para poder leer el body) y
modifica el menú con el número indicado.
● Crea una ruta DELETE /api/borrarMenu para borrar un menú existente. Envía un
objeto al servidor en el body de la petición, recoge ese objeto en el servidor
(req.body) y borra el menú con el número indicado.
● Haz que la petición DELETE se pueda hacer mediante un botón en cada uno de los
menús. */

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
        app.locals.db= client.db("confeccionMenus");
        console.log("🟢 MongoDB conectado");
    }});

app.post('/api/nuevoMenu', function(req, res) {
    let nombreMenu = req.body.nombreMenu;
    let platoUno = req.body.platoUno;
    let platoDos = req.body.platoDos;
    let postre = req.body.postre;
    let precio = req.body.precio;
    let menu={"nombreMenu":nombreMenu,"platoUno":platoUno,"platoDos":platoDos,"postre":postre,"precio":precio}
    app.locals.db
    .collection('menusRestaurantes')
    .insertOne( menu, 
        function(err,respuesta){
            if(err != null) {
            console.log(err),
            res.send({mensaje: "Ha habido un error. " + err } );
            } else {
                res.send({ results: respuesta });
            }});});

app.get('/api/menus', function(req, res){
    app.locals.db
    .collection('menusRestaurantes')
    .find()
    .toArray( 
        function(err, datos){
            if(err!=null) {
            console.log(err);
            res.send({mensaje: "error: " + err});
            } else {
            console.log(datos);
            res.send(datos);
            } });});

app.put("/api/editarMenu", function(req, res) {
    let modificacion=req.body;
    app.locals.db
    .collection('menusRestaurantes')
    .updateOne({ nombreMenu:req.body.nombreMenu},{ $set: modificacion },
    function(err, datos) {
        if(err!=null) {
        console.log(err);
        res.send({mensaje: "error: " + err});
        } 
        else {
        console.log(datos);
        res.send(datos);
        }
    });});
      
app.delete("/api/borrarMenu", function(req, res) {
    app.locals.db
    .collection('menusRestaurantes')
    .deleteMany({ nombreMenu:req.body.nombreMenu}, 
    function(err, datos) {
        if(err!=null) {
            console.log(err);
            res.send({mensaje: "error: " + err});
        } 
        else {
            console.log(datos);
            res.send(datos);
            }});});

app.listen(process.env.PORT || 3001);