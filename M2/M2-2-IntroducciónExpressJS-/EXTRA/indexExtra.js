/* Crea una aplicación que simula una tienda online. Crea una variable almacén en la que
guardes un array con objetos. Cada objeto será un departamento de la tienda y tendrás
varios productos en cada uno. Cada uno de estos productos será un objeto con las
siguientes propiedades: nombre, precio y stock. Crea también una variable cesta.
Crea las siguientes rutas:
● Dos rutas diferentes para cada uno de los departamentos de la tienda.
○ Una ruta devolverá en la respuesta todos los productos que hay en ese
departamento. Haz que se muestre en una tabla HTML.
○ La otra ruta servirá para comprar productos. Esta ruta recibirá dos
parámetros: nombre del producto y cantidad. Añadir a la variable cesta el
producto y la cantidad seleccionada Si la cantidad pedida es mayor que el
stock, devolveremos un mensaje avisando de que no hay stock suficiente.
● Una ruta para mostrar la cesta.
● Una ruta para confirmar la compra. Esta ruta devolverá un mensaje de confirmación
y vaciará la cesta. */
const express=require('express');
const app = express();
app.listen(3002);
let cesta=[];
let almacen=require('./almacen').almacen;


app.get('/mujer', function(request,response) {
    let mproducto1=almacen[0].producto1.nombre;
    let mproducto2=almacen[0].producto2.nombre;
    let mproducto3=almacen[0].producto3.nombre;
    let mproducto4=almacen[0].producto4.nombre;

    response.send(`<table border="2">
    <tr>
    <th colspan="1">PRODUCTOS SECCIÓN MUJER</th>
    </tr>
    <tr>
    <th>PRODUCTO</th>
    </tr>

    <tr>
    <th>${mproducto1}</th>
    </tr>

    <tr>
    <th>${mproducto2}</th>
    </tr>
    <tr>
    <th>${mproducto3}</th>
    </tr>
    <tr>
    <th>${mproducto4}</th>
    </tr>
    </table>`);
   });
app.get('/hombre', function(request,response) {
    
    let mproducto1=almacen[1].producto1.nombre;
    let mproducto2=almacen[1].producto2.nombre;
    let mproducto3=almacen[1].producto3.nombre;
    let mproducto4=almacen[1].producto4.nombre;

    response.send(`<table border="2">
    <tr>
    <th colspan="1">PRODUCTOS SECCIÓN HOMBRE</th>
    </tr>
    <tr>
    <th>PRODUCTO</th>
    </tr>

    <tr>
    <th>${mproducto1}</th>
    </tr>

    <tr>
    <th>${mproducto2}</th>
    </tr>
    <tr>
    <th>${mproducto3}</th>
    </tr>
    <tr>
    <th>${mproducto4}</th>
    </tr>
    </table>`);
   });

   app.get('/compra/mujer/chaqueta/:parametro', function(request,response) {
    let nombre=almacen[0].producto1.nombre;
    let stock=almacen[0].producto1.stock;
    let departamento=almacen[0].departamento;
    let pedido=request.params.parametro;
    let respuesta;
    let compra={};
    if(pedido<=stock){
        compra.nombre=nombre;
        compra.departamento=departamento;
        compra.pedido=pedido;
        cesta.push(compra);
        respuesta=`<h3>Producto(s) añadido(s) a la cesta.</h3>`
    }else{
        respuesta=`Solo hay ${stock} unidades disponibles.`
    }
    response.send(respuesta);
   });

   app.get('/compra/mujer/jeans/:parametro', function(request,response) {
    let nombre=almacen[0].producto2.nombre;
    let stock=almacen[0].producto2.stock;
    let departamento=almacen[0].departamento;
    let pedido=request.params.parametro;
    let respuesta;
    let compra={};
    if(pedido<=stock){
        compra.nombre=nombre;
        compra.departamento=departamento;
        compra.pedido=pedido;
        cesta.push(compra);
        respuesta=`<h3>Producto(s) añadido(s) a la cesta.</h3>`
    }else{
        respuesta=`Solo hay ${stock} unidades disponibles.`
    }
    response.send(respuesta);
   });

   app.get('/compra/mujer/zapatillas/:parametro', function(request,response) {
    let nombre=almacen[0].producto3.nombre;
    let stock=almacen[0].producto3.stock;
    let departamento=almacen[0].departamento;
    let pedido=request.params.parametro;
    let respuesta;
    let compra={};
    if(pedido<=stock){
        compra.nombre=nombre;
        compra.departamento=departamento;
        compra.pedido=pedido;
        cesta.push(compra);
        respuesta=`<h3>Producto(s) añadido(s) a la cesta.</h3>`
    }else{
        respuesta=`Solo hay ${stock} unidades disponibles.`
    }
    response.send(respuesta);
   });
   app.get('/compra/mujer/jersey/:parametro', function(request,response) {
    let nombre=almacen[0].producto4.nombre;
    let stock=almacen[0].producto4.stock;
    let departamento=almacen[0].departamento;
    let pedido=request.params.parametro;
    let respuesta;
    let compra={};
    if(pedido<=stock){
        compra.nombre=nombre;
        compra.departamento=departamento;
        compra.pedido=pedido;
        cesta.push(compra);
        respuesta=`<h3>Producto(s) añadido(s) a la cesta.</h3>`
    }else{
        respuesta=`Solo hay ${stock} unidades disponibles.`
    }
    response.send(respuesta);
   });

   app.get('/compra/hombre/chaqueta/:parametro', function(request,response) {
    let nombre=almacen[1].producto1.nombre;
    let stock=almacen[1].producto1.stock;
    let departamento=almacen[1].departamento;
    let pedido=request.params.parametro;
    let respuesta;
    let compra={};
    if(pedido<=stock){
        compra.nombre=nombre;
        compra.departamento=departamento;
        compra.pedido=pedido;
        cesta.push(compra);
        respuesta=`<h3>Producto(s) añadido(s) a la cesta.</h3>`
    }else{
        respuesta=`Solo hay ${stock} unidades disponibles.`
    }
    response.send(respuesta);
   });

   app.get('/compra/hombre/jeans/:parametro', function(request,response) {
    let nombre=almacen[1].producto2.nombre;
    let stock=almacen[1].producto2.stock;
    let departamento=almacen[1].departamento;
    let pedido=request.params.parametro;
    let respuesta;
    let compra={};
    if(pedido<=stock){
        compra.nombre=nombre;
        compra.departamento=departamento;
        compra.pedido=pedido;
        cesta.push(compra);
        respuesta=`<h3>Producto(s) añadido(s) a la cesta.</h3>`
    }else{
        respuesta=`Solo hay ${stock} unidades disponibles.`
    }
    response.send(respuesta);
   });

   app.get('/compra/hombre/zapatillas/:parametro', function(request,response) {
    let nombre=almacen[1].producto3.nombre;
    let stock=almacen[1].producto3.stock;
    let departamento=almacen[1].departamento;
    let pedido=request.params.parametro;
    let respuesta;
    let compra={};
    if(pedido<=stock){
        compra.nombre=nombre;
        compra.departamento=departamento;
        compra.pedido=pedido;
        cesta.push(compra);
        respuesta=`<h3>Producto(s) añadido(s) a la cesta.</h3>`
    }else{
        respuesta=`Solo hay ${stock} unidades disponibles.`
    }
    response.send(respuesta);
   });
   app.get('/compra/hombre/jersey/:parametro', function(request,response) {
    let nombre=almacen[1].producto4.nombre;
    let stock=almacen[1].producto4.stock;
    let departamento=almacen[1].departamento;
    let pedido=request.params.parametro;
    let respuesta;
    let compra={};
    if(pedido<=stock){
        compra.nombre=nombre;
        compra.departamento=departamento;
        compra.pedido=pedido;
        cesta.push(compra);
        respuesta=`<h3>Producto(s) añadido(s) a la cesta.</h3>`
    }else{
        respuesta=`Solo hay ${stock} unidades disponibles.`
    }
    response.send(respuesta);
   });


   app.get('/cesta', function(request,response) {
    let tabla=`<table border="2">
    <tr>
    <th colspan="4">CESTA DE LA COMPRA</th>
    </tr>
    <tr>
    <th>NOMBRE</th>
    <th>DEPARTAMENTO</th>
    <th>PEDIDO</th>
    </tr>`
    for(let i=0;i<cesta.length;i++){
        tabla+=`<tr>
        <th>${cesta[i].nombre}</th>
        <th>${cesta[i].departamento}</th>
        <th>${cesta[i].pedido}</th>
        </tr>`
    };

    tabla+=`</table>`
    response.send(tabla);
});

app.get('/confirmar', function(request,response) {
    
    cesta=[];
    response.send(`<h1>¡Compra confirmada! En breves recibirá su pedido.</h1>`);
});
   