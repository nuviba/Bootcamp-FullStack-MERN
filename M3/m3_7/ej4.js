/* 4. Realiza una clase Finanzas que convierta dólares a euros y viceversa. Codifica los
métodos dolaresToEuros y eurosToDolares */

class Finanzas{

    constructor(dinero){
        this.dinero=dinero;
        
    }

    dolaresToEuros(){
        return this.dinero*0.89

    }
    eurosToDolares(){
        return this.dinero*1.12
    }

}

let dinero=new Finanzas (1900);

console.log(dinero.dolaresToEuros());
console.log(dinero.eurosToDolares());
