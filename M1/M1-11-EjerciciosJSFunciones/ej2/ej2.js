//2. Escribe una función que escriba “Hola” tantas veces como el número que lepasamos de parámetro. Llámala dos veces, primero con 5 y después con 3.

holax(5);
holax(3);

function holax(veces){
    for(let i=0;i<veces;i++){
        console.log("Hola")
    }
}