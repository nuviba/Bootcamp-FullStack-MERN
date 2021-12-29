/* 1. Se pretende crear una clase llamada Cifras que tenga lo siguiente:
a. Un constructor que permite inicializar un número con el valor pasado como
argumento.
b. Un método llamado esPar que devuelve verdadero si lo es y falso en caso
contrario.
c. Un método llamado sumaDigitos que devuelve un entero con la suma de
sus dígitos. */

class Cifras {
    constructor(numero){
        this.numero=numero;
    }
    esPar(){
        if(this.numero%2==0){
            return true;

        }else{
            return false;
        }

    }
    sumaDigitos(){
        let numStr=this.numero.toString();
        let suma=0;
        for(let i=0;i<numStr.length;i++){
            suma+=parseInt(numStr[i]);
        }
        return suma;
    }
}
let numero=new Cifras (22);
console.log(numero.esPar());
console.log(numero.sumaDigitos());