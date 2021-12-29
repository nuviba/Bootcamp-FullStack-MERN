function valConsecutiv(num){
    let ar10=[];
    for(let i=1;i<=10;i++){
        ar10[i-1]=num+i
    }
    return ar10;
}

module.exports.valConsecutiv=valConsecutiv;