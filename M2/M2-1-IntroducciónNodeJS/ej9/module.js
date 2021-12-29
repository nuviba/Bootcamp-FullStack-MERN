function esPar(num){
    let numero;
    if(num%2==0){
        numero=true;
    }
    else{
        numero=false;
    }
    return numero;
}

module.exports.esPar=esPar;