/* 8. Con los dos módulos del ejercicio anterior, crea una aplicación en la que hacer
peticiones de tipo get a la que le añadas “/borrar/:numero” para borrar el número
(ponerlo a cero) del índice pasado por parámetro indicado (si es que existe). */

const express=require('express');
const app = express();
app.listen(3001);
let arrayRandom= require('./ej7/modulo1').arrayRandom;
let numRandom= require('./ej7/modulo2').numRandom;

app.get('/array', function(request,response) {
    arrayRandom[numRandom()]+=1;
    response.send(`${arrayRandom}`);
   });

app.get('/array/:parametro', function(request,response) {
    let numero= request.params.parametro;
    
    if(numero<=9&&numero>=0){
        arrayRandom[numero]=0;
        response.send(`<h1>La posición ${numero} se ha reiniciado.`);
    }
    else{
        response.send(`<h1>La posición ${numero} no existe.`);
    }
   });