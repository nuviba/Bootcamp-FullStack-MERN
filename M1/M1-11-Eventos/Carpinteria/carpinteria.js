/* Vamos a crear una página web para la Carpintería Mazarredo. Una vez creada la estructura en el main vamos a mostrar cuatro divs en los que tendremos como título “brocha”, “llave”,“martillo” y “tronco” junto con el precio de cada uno y un botón en el que hará click para añadir una unidad del producto a la cesta y otro para quitar una unidad del producto a la
cesta.

Cada vez que hagamos click en uno de los botones (8 botones en total, 2 para añadir/restar una brocha, 2 para añadir/restar una llave, 2 para añadir/restar un martillo y 2 para
añadir/restar un tronco) se mostrará en la cesta un mensaje con el texto
Martillos: 7
Llaves: 5

Para cada producto que tenga más de 0 unidades en la cesta, seguida del icono del
producto tantas veces como unidades haya en la cesta (en el ejemplo anterior, aparecerían
7 iconos uno tras otro después de Martillos: 7)
Para acabar teniendo este programa, podemos hacerlo por partes:

1. En primer lugar crear una página con un sólo producto y un sólo botón. Al hacer click
en el botón se le sumará uno al total y en el mensaje de la cesta aparecerá el
número total que tengamos.

2. Una vez tengamos la parte anterior funcionando, hacer que en vez de mostrar el
número solamente, la cesta muestre “Martillos: 7”, combinando el número con el
nombre del producto.

3. Una vez funcione lo anterior, añadiremos un botón para restar unidades.

4. Una vez tengamos la parte anterior funcionando, añadiremos que se muestre el
icono del producto tantas veces como unidades tengamos en la cesta.

5. Cuando todo funcione correctamente para un producto añadiremos otro. El código
será parecido pero tendremos que modificar ciertas partes.

6. Finalmente, una vez tengamos dos productos funcionando correctamente,
añadiremos los otros dos (o podemos añadir primero el tercero, comprobar que
funcione y bien y después añadir el cuarto) */
let brocha=0;
let llave=0;
let martillo=0;
let tronco=0;
let costotalB=0;
let costotal=0;
let iva;

function sumaBrocha(){
    brocha++;
    console.log(brocha);
}
function sumaLlave(){
    llave++;
    console.log(llave);

}
function sumaMartillo(){
    martillo++;
    console.log(martillo);

}
function sumaTronco(){
    tronco++;
    console.log(tronco);

}
function restaBrocha(){
    brocha--;
    console.log(brocha);
}
function restaLlave(){
    llave--;
    console.log(llave);

}
function restaMartillo(){
    martillo--;
    console.log(martillo);

}
function restaTronco(){
    tronco--;
    console.log(tronco);

}
function cestaCompra(){
    costeTotal();
    document.getElementById("mostrarProductos").innerHTML="";
    if(brocha>0){
        document.getElementById("mostrarProductos").innerHTML+=`<div class=elemento id=cestaBrocha></div>`;
        document.getElementById("cestaBrocha").innerHTML+=`<h4 style="width: 100px;">Brocha: ${brocha}</h4>`;
        for(let i=0;i<brocha;i++){
            document.getElementById("cestaBrocha").innerHTML+=`<img class=icono src="./iconos/Copia de brocha.svg" alt="icono brocha">`;
            
        }
    }
    if(llave>0){
        document.getElementById("mostrarProductos").innerHTML+=`<div class=elemento id=cestaLlave></div>`;
        document.getElementById("cestaLlave").innerHTML+=`<h4 style="width: 100px;">Llave: ${llave}</h4>`;
        for(let i=0;i<llave;i++){
            document.getElementById("cestaLlave").innerHTML+=`<img class=icono src="./iconos/Copia de llave.svg" alt="icono llave">`;
            
        }

    }
    if(martillo>0){
        document.getElementById("mostrarProductos").innerHTML+=`<div class=elemento id=cestaMartillo></div>`;
        document.getElementById("cestaMartillo").innerHTML+=`<h4 style="width: 100px;">Martillo: ${martillo}</h4>`;
        for(let i=0;i<martillo;i++){
            document.getElementById("cestaMartillo").innerHTML+=`<img class=icono src="./iconos/Copia de martillo.svg" alt="icono martillo">`;
            
        }

    }
    if(tronco>0){
        document.getElementById("mostrarProductos").innerHTML+=`<div class=elemento id=cestaTronco></div>`;
        document.getElementById("cestaTronco").innerHTML+=`<h4 style="width: 100px;">Tronco: ${tronco}</h4>`;
        for(let i=0;i<tronco;i++){
            document.getElementById("cestaTronco").innerHTML+=`<img class=iconoTronco src="./iconos/Copia de tronco.svg" alt="icono tronco">`;
            
        }

    }
    document.getElementById("mostrarProductos").innerHTML+=`
    <ul>
    <li>PRECIO SIN IVA: ${costotalB}€</li>
    <li>IVA: ${iva}€</li>
    <li>PRECIO FINAL: ${costotal}€</li>
    </ul>`
}
function costeTotal(){
    costotalB=(brocha*1.50)+(llave*2.50)+(martillo*3.50)+(tronco*0.50);
    iva=costotalB*0.21
    costotal=costotalB+iva;

}
