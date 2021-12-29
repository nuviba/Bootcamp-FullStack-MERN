/* Crea una aplicación para llevar un registro de libros leídos/por leer. Cada libro tendrá dos
propiedades:
● Título del libro
● Estado: “leído” o “sin leer”
Requisitos:
● Una ruta GET /api/libros que devuelva toda la colección de libros
● Una ruta GET /api/libros/:titulo que devuelva el libro solicitado.
● Una ruta POST /api/nuevoLibro/:titulo que añada un libro a la colección. En esta ruta,
crea un objeto libro con el título que llega por req.params y el estado: “sin leer”
libro : { título:, estado: "sin leer"}
● Una ruta PUT /api/editarLibro/:titulo. En esta ruta modifica el estado de libro escrito
en la ruta: haz que cambie de “sin leer” a “leído”
● Una ruta DELETE /api/borrarLibro/:titulo que borre el libro indicado de la base de
datos
● Haz las peticiones de PUT y DELETE mediante botones en cada uno de los libros
que se enseñan al usuario */

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
        app.locals.db= client.db("historialLibros");
        console.log("🟢 MongoDB conectado");
    }});

app.post('/api/nuevoLibro/:titulo', function(req, res) {
    let titulo = req.params.titulo;
    let libro={"Titulo":titulo,"Estado":"No leído"}
    app.locals.db
    .collection('coleccionLibros')
    .insertOne( libro, 
    function(err,respuesta){
        if(err != null) {
            console.log(err),
            res.send({mensaje: "Ha habido un error. " + err } );
        }
        else {
            res.send({ results: respuesta });
        }
    });});

app.get('/api/libros', function(req, res){
    app.locals.db
    .collection('coleccionLibros')
    .find()
    .toArray( 
    function(err, datos){
        if(err!=null) {
            console.log(err);
            res.send({mensaje: "error: " + err});
        } 
        else {
        res.send(datos);
        console.log(datos);
        } });});

app.get('/api/libros/:titulo', function(req, res){
    app.locals.db
    .collection('coleccionLibros')
    .find({"Titulo": req.params.titulo})
    .toArray( 
    function(err, datos){
        if(err!=null) {
            console.log(err);
            res.send({mensaje: "error: " + err});
        } 
        else {
            res.send(datos);
            console.log(datos);
        } });});

app.put("/api/editarLibro/:titulo", function(req, res) {
    app.locals.db
    .collection('coleccionLibros')
    .updateOne({ Titulo: req.params.titulo },{ $set: { Estado: "Leído" } },
    function(err, datos) {
        if(err!=null) {
            console.log(err);
            res.send({mensaje: "error: " + err});
        } 
        else {
            console.log(datos);
            res.send(datos);
        }});});
        
app.delete("/api/borrarLibro/:titulo", function(req, res) {
    app.locals.db
    .collection('coleccionLibros')
    .deleteOne({ Titulo: req.params.titulo}, 
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
