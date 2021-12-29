let edad =parseInt(window.prompt('¿Qué edad tienes?'));
let carnet;
let nombre;
let apellido;
let ciudad;
let dia;
let costedia=25;
let semana;
let costesemana=150;
let diasuelto;
let coste;


if (edad>=18){
    carnet=window.prompt('¿Tienes carnet de coche?[S/N]');
    if (carnet.toUpperCase() == "S"){
        nombre=window.prompt('Dime tu nombre');
        apellido=window.prompt('Dime tu primer apellido');
        ciudad=window.prompt('¿Desde qué ciudad quieres alquilar el coche?');
        dia=window.prompt('¿Cuantos días vas a necesitar el coche?');

        document.getElementById("datoscliente").innerHTML=`DATOS DEL CLIENTE:`
        document.getElementById("nombre").innerHTML=`NOMBRE: `+nombre;
        document.getElementById("apellido").innerHTML=`APELLIDO: `+apellido;
        document.getElementById("edad").innerHTML=`EDAD: `+edad;
        document.getElementById("ciudad").innerHTML=`CIUDAD: `+ciudad;

        if(dia<7){
            coste=dia*costedia;
            document.getElementById("precio").innerHTML=
            `EL COSTE TOTAL ES DE:`+coste+`€`;
        }
        else if(dia>=7){
            semana=Math.floor(dia/7);
            diasuelto=dia%7;
            coste=(semana*costesemana)+(diasuelto*costedia);
            document.getElementById("precio").innerHTML=
            ` El precio total es de: `+coste+`€`;

        }
    }
    else {
        document.getElementById("nocarnet").innerHTML=`No puedes alquilar un choche hasta que tengas el carnet de conducir`;    }
    }
else{
    document.getElementById("menor").innerHTML=`No puedes alquilar un choche hasta que cumplas 18 años y tengas el carnet de conducir`;
}