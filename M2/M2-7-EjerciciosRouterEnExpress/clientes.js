const { application } = require('express');
const express = require('express');
const router = express.Router();

module.exports = router;


router.post("/registro",function(req, res) {
req.app.locals.db
    .collection('clientes')
    .find({dni:req.body.dni})
    .toArray(function(err,datos){
        if (err) {
            res.send({ error: true, data: datos, mensaje: err });
          } else {
            if (datos.length > 0) {
              res.send({
                error: true,
                data: datos,
                mensaje: "El usuario ya existe",
              });
            } else {
              req.app.locals.db
                .collection("clientes")
                .insertOne(req.body, function (err1, datos1) {
                  err1
                    ? res.send({ error: true, data: datos1, mensaje: err1 })
                    : res.send({
                        error: false,
                        data: datos1,
                        mensaje: "Alta reliazada correctamente",
                      });
                });
            }
          }
        });
    });
            
router.get('/', function(req, res){
    req.app.locals.db
    .collection('clientes')
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

router.put("/modificar", function(req, res) {
    let modificacion=req.body;
    req.app.locals.db
    .collection('clientes')
    .updateOne({ dni:req.body.dni},{ $set: modificacion },
    function(err, datos) {
      //falta fallo en la consulta
        if(datos.modifiedCount==0) {
            res.send({
                error: true,
                data: datos,
                mensaje: "No hay ningún usuario con el DNI introducido",
              });}
        else {
            res.send({
                error: false,
                data: datos,
                mensaje: "Usuario modificado correctamente",
              });}
        });});

router.delete("/eliminar", function(req, res) {
    req.app.locals.db
    .collection('clientes')
    .deleteOne({dni:req.body.dni}, 
    function(err, datos) {
        if(err!=null) {
            console.log(err);
            res.send({mensaje: "error: " + err});
        } 
        else {
            console.log(datos);
            res.send(datos);
        }});});
module.exports=router;
        