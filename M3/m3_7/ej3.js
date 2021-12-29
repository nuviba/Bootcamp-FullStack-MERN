/* 3. Diseñar una clase llamada Rectángulo que contenga :
a. Un constructor que permita declarar objetos con dos argumentos ( largo y
ancho)
b. Un método llamado calcularArea que devuelve el área del rectángulo
c. Un método llamado calcularPerimetro que calcula el perímetro del
rectángulo. */

class Rectangulo{

    constructor(largo, ancho){
        this.largo=largo;
        this.ancho=ancho;
    }

    calcularArea(){
        return this.largo*this.ancho;

    }
    calcularPerimetro(){
        return (this.largo*2)+(this.ancho*2)

    }

}

let rectangulo=new Rectangulo (3,2);

console.log(rectangulo.calcularArea());
console.log(rectangulo.calcularPerimetro());