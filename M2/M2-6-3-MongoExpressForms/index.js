/* Crea una aplicación en la que guardar puntuaciones de series de TV que hayas visto. En la
base de datos guarda lo siguiente:
● Título de la serie
● Plataforma donde está disponible (Netflix, HBO, Amazon, Disney+...)
● Nota
Requisitos:
● Crea una ruta GET /api/series que devuelva todas las series y puntuaciones que
haya en la colección.
● Crea una ruta GET /api/serie que devuelva la información de una ÚNICA serie. Crea
un formulario para introducir el nombre de la serie que quieres buscar.
● Crea una ruta POST /api/nuevaSerie que añada una nueva serie a la colección.
Envía los datos usando un formulario en el HTML. En el servidor, recoge la
información que llega en req.body y acuérdate de añadir el app.use
correspondiente */

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
        app.locals.db= client.db("puntuacionesSeries");
        console.log("🟢 MongoDB conectado");
    }});

app.post('/api/nuevaSerie', function(req, res) {
    let titulo = req.body.titulo;
    let plataforma= req.body.plataforma;
    let nota= req.body.nota;
    console.log(titulo);
    let serie={"Titulo":titulo,"Plataforma":plataforma,"Nota":nota}
    app.locals.db
    .collection('SeriesPelis')
    .insertOne( serie, 
    function(err,respuesta){
        if(err != null) {
            console.log(err),
            res.send({mensaje: "Ha habido un error. " + err } );
        }
        else {
            res.send(`<h1>${titulo} añadid@ y puntuad@</h1>`);
        }
    });});

app.get('/api/series', function(req, res){
    app.locals.db
    .collection('SeriesPelis')
    .find()
    .toArray( 
    function(err, datos){
        if(err!=null) {
            console.log(err);
            res.send({mensaje: "error: " + err});
        } 
        else {
        res.send(datos);
        } });});

app.get('/api/serie', function(req, res){
    app.locals.db
    .collection('SeriesPelis')
    .find({"Titulo": req.query.titulo})
    .toArray( 
    function(err, datos){
        if(err!=null) {
            console.log(err);
            res.send({mensaje: "error: " + err});
        } 
        else {
            let tabla=`<table border="2">
            <tr>
                <th>TÍTULO</th>
                <th>PLATAFORMA</th>
                <th>PUNTUACIÓN</th>
            </tr>
            <tr>
                <th>${datos[0].Titulo}</th>
                <th>${datos[0].Plataforma}</th>
                <th>${datos[0].Nota}</th>
            </tr>`
        
            tabla+=`</table>`
            res.send(tabla);
        } });});
        
app.listen(process.env.PORT || 3000);
