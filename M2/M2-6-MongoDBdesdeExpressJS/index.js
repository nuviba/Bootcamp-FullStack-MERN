/* Tenemos una base de datos de una tienda de mesas. Las mesas son de todo tipo, pero todas tienen las siguientes propiedades:
Tamaño
Color
Material
Patas (nº de patas)
Crea los siguientes métodos:
● Método GET y ruta ‘/api/mesas’. Mostrará todas las mesas que tenemos en la base
de datos.
● Método POST y ruta ‘/api/anyadir’. Añadiremos una nueva mesa a la base de datos.
● Método PUT y ruta ‘/api/modificar/:color’. Todas las mesas del color indicado en la
ruta cambiarán su color a granate.
● Método DELETE y ruta ‘/api/borrar/:patas. Borrará la(s) mesa(s) con el número de
patas indicado. */

const { application } = require("express");
const express = require('express');
const app = express();

const mongodb = require('mongodb');

let MongoClient = mongodb.MongoClient;

MongoClient.connect( "mongodb://localhost:27017", function(err, client){
    if(err!=null) {
        console.log(err);
        console.log("no se ha podido conectar con mongo");
    } 
    else {
        app.locals.db= client.db("tienda-de-mesas");
        console.log("🟢 MongoDB conectado");
    }});

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.post('/api/anyadir', function(req, res) {
    let nombreObjeto = req.body;
    app.locals.db
    .collection('nombreColección')
    .insertOne( nombreObjeto, 
        function(err,respuesta){
            if(err !== null) {
            console.log(err),
            res.send({mensaje: "Ha habido un error. " + err } );
            } else {
                res.send({ results: respuesta });
            }});});

app.get('/api/mesas', function(req, res){
    app.locals.db
    .collection('nombreColección')
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

app.put("/api/modificar/:color", function(req, res) {
    app.locals.db
    .collection('nombreColección')
    .updateOne({ Color: req.params.color },{ $set: { Color: "granate" } },
    function(err, datos) {
        if(err!=null) {
        console.log(err);
        res.send({mensaje: "error: " + err});
        } 
        else {
        console.log(datos);
        res.send(datos);
        }});});
      
app.delete("/api/borrar/:patas", function(req, res) {
    app.locals.db
    .collection('nombreColección')
    .deleteMany({ Patas: parseInt(req.params.patas)}, 
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