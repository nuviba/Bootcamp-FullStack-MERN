/* 8. Crea un módulo con el siguiente objeto:
{
    "array": [1,2,3],
    "boolean": true,
    "number": 123,
    "object": {"a":"b","c": "d","e":"f"},
    "string": "Hello World"
    }

    Importa el módulo y muestra por consola el valor de la propiedad “boolean” y el
    atributo “c” del “object”. */

let modulo=require ('./module');

console.log(modulo.mod.boolean);
console.log(modulo.mod.object.c);


    