/* 3. Instala el paquete exact-math usando npm. Crea un archivo .js y muestra por
consola las siguientes operaciones utilizando el módulo instalado:
a. 789+34+250443
b. 2059-79
c. 3.24*97.856
d. 1205/12.002 */
let exactMath=require('exact-math');
console.log(exactMath.add(789, 34, 250443));
console.log(exactMath.sub(2059,79));
console.log(exactMath.mul(3.24,97.856)); 
console.log(exactMath.div(1205,12.002)); 
