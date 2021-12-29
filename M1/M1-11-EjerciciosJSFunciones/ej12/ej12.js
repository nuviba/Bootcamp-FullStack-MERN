/* 12. Escribe una función a la que le pasamos un año y devuelve true si es bisiesto. En el
programa principal, pídele al usuario un número y muestra en pantalla “El año … es
bisiesto” o “El año … no es bisiesto” y sigue pidiendo números y diciendo si es o no
bisiesto hasta que introduzca un 0. Un año es bisiesto si es divisible entre 4, pero no
si es divisible entre 100 pero si es divisible entre 400 sí lo es.        
       }*/
       
let año=parseInt(window.prompt('Dime un año:'));

let bi=esBisiesto(año);


if(bi){
    alert(`El año ${año} es bisiesto.`);

}
else{
    alert(`El año ${año} no es bisiesto.`);

}
function esBisiesto(año){
    let bisiesto=true;
    if (año%4===0){
        return bisiesto;
    }

    else if(año%100===0 && año%400===0){
        return bisiesto;
    }
    else{
        return !bisiesto;
         }

}