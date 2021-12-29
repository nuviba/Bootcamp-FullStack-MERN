/* 10. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
Pediremos de qué figura queremos calcular su área y según lo introducido pedirá los
valores necesarios para calcular el área. Crea un método por cada figura para
calcular cada área, este devolverá un número entero(sin decimales). Muestra el
resultado por pantalla
a. Circulo: (radio^2)*PI
b. Triángulo: (base * altura) / 2
c. Cuadrado: lado * lado */

let figura=window.prompt(`Elige una opción para calcular el área:\n1-Circulo\n2-Triángulo\n3-Cuadrado`);
let radio;
let base;
let altura;
let lado;
let area;
switch(figura){
    case "1":
        radio=parseInt(window.prompt('Dime el radio del circulo:'));
        area=circulo(radio);
        alert(`El área del círculo es ${area}.`);

        break;
    case "2":
        base=parseInt(window.prompt('Dime la base del triángulo:'));
        altura=parseInt(window.prompt('Dime la altura del triángulo:'));
        area=triangulo(base,altura);
        alert(`El área del triangulo es ${area}.`);
        break;
    case "3":
        lado=parseInt(window.prompt('Dime el lado del cuadrado:'));
        area=cuadrado(lado);
        alert(`El área del cuadrado es ${area}.`);
        break;
    default:
        alert('Opción no válida.')
}
function circulo (radio){
    let area=(radio*radio)*3.14
    return Math.floor(area);

}
function triangulo(base,altura){
    let area=(base*altura)/2
    return Math.floor(area);
}
function cuadrado(lado){
    let area=lado*lado
    return Math.floor(area);
}


