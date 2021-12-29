/* 11. Crea un aplicación que nos convierta una cantidad de euros introducida por teclado
a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
devolverá ningún valor, mostrará un mensaje indicando el cambio.
a. 0.86 libras es un 1 €
b. 1.28611 $ es un 1 €
c. 129.852 yenes es un 1 € */

let eur=parseFloat(window.prompt('Dime cuantos euros quieres convertir:'));
let tipo=window.prompt(`Elige una opción para hacer el cambio de moneda:\nLibra\nDólar\nYen`);
tipo=tipo.toLowerCase();
moneda(eur,tipo);

function moneda (euro,tipo){
    let cambio;
    switch(tipo){
        case "libra":
            cambio=euro*0.86
            alert(`${eur}€ son ${cambio}£`);
            break;
        case "dólar":
            cambio=euro*1.28611
            alert(`${eur}€ son ${cambio}$`);
            break;
        case "yen":
            cambio=euro*129.852
            alert(`${eur}€ son ${cambio}¥`);
            break;
        default:
            window.alert("Moneda errónea");
    }

}