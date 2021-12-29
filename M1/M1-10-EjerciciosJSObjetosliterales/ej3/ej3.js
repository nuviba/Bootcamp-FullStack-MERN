/* 3. Crea una página con un div vacío. Al entrar en la página se le preguntará al usuario
que introduzca un número. Inserta ese número en el div vacío. Si el número es
menor que 100, el número tendrá color verde, si el número es entre 100 y 200 tendrá
color amarillo. Si el número es mayor que 200, tendrá color rojo. */
let num=parseFloat(window.prompt('Dime un número:'));
let div=document.getElementById('section');
div.innerHTML=num;
if(num<100){
    div.style.color='green';
}
else if(num>=100&&num<=200){
    div.style.color='yellow';
}
else if(num>200){
    div.style.color='red';
}
