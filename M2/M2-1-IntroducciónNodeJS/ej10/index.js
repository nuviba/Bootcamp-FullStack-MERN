/* 10. Escribe un módulo con una función que reciba un array de números y lo muestre en
pantalla desde la primera posición hasta la última. Después escribe otro módulo con
una función que reciba un array de números y lo muestre en pantalla desde la última
posición a la primera. Crea un array y pásalo a cada una de las funciones. */

let modul1=require("./modulo1");
let modul2=require("./modulo2");

let mostrarArray=[4,2,5,68,8,4,21,4,6,7,5];

modul1.mostrarArray1(mostrarArray);
modul2.mostrarArray2(mostrarArray);
