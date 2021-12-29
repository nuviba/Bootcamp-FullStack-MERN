/* 2. Crea una clase Distancia con un método MillasAMetros() que toma como parámetro
de entrada un valor en millas marinas y las convierte a metros.
a. Una vez tengas este método escribe otro MillasAKilometros() que realice la
misma conversión, pero esta vez exprese el resultado en kilómetros.
Nota: 1 milla marina equivale a 1609,34 metros. */

class Distancia{
    constructor(distancia){
        this.distancia=distancia;
        
    }

    millasAmetros(){
        return this.distancia*1609.34;


    }
    millasAkilometros(){
        return this.millasAmetros()/1000;

    }
}

let distancia=new Distancia ();
console.log(distancia.millasAmetros());
console.log(distancia.millasAkilometros());