/* Crea una aplicación para gestionar menús de un restaurante. Cada menú tendrá 5 propiedades:

Número de menú
Primer plato
Postre
Segundo plato
Precio

Requisitos

Crea una ruta GET /api/menus para obtener todos los menús

Crea una ruta POST /api/nuevoMenu para añadir un nuevo menú. Desde el navegador manda un objeto con las 5 propiedades y, en el servidor, introduce ese objeto en la base de datos

Crea una ruta PUT /api/editarMenu para modificar un menú existente. Envía un objeto al servidor en el body de la petición, recoge ese objeto en el servidor (req.body, recuerda añadir el app.use correspondiente para poder leer el body) y modifica el menú con el número indicado. 

Crea una ruta DELETE /api/borrarMenu para borrar un menú existente. Envía un objeto al servidor en el body de la petición, recoge ese objeto en el servidor (req.body) y borra el menú con el número indicado.

Haz que la petición DELETE se pueda hacer mediante un botón en cada uno de los menús.

*/

const express=require('express');
let app = express();

let personas=require('./personas');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static("public"));


app.get("/personas", (req, res) => {
    res.send(personas);
  });
app.post("/post", (req, res) => {
  let personaNueva = {};
  personaNueva.nombre=req.body.nombre;
  personaNueva.apellido=req.body.apellido;
  personaNueva.edad=req.body.edad;

  personas.push(personaNueva);
});

app.put("/put",(req,res)=>{
  let nombre= req.body.nombre;
  for(let i=0;personas.length>i;i++){
    if(nombre==personas[i].nombre){
      personas[i].apellido=req.body.apellido
      personas[i].edad=req.body.edad
    }
  }

});

app.delete("/delete",(req,res)=>{
  let nombre= req.body.nombre;
  for(let i=0;personas.length>i;i++){
    if(nombre==personas[i].nombre){
      personas.splice(i,1);
    }
  }

});


  app.listen(process.env.PORT || 3000);

  