import { useState } from "react";
function Libro(props){
    let [stock, setStock]=useState(props.libro.stock)
    let stockmensaje;
    if(stock<1){
        stockmensaje=<p>No quedan copias</p>
    }
    else{
        stockmensaje=<p>Stock: {stock}</p>
    }
    return(
        <div className="libro">
            <img src={props.libro.img} alt={props.libro.titulo}></img>
            <h1>{props.libro.titulo}</h1>
            <h2>{props.libro.autor}</h2>
            <p>{props.libro.descripcion}</p>
            {stockmensaje}
            
            <button onClick={function(){setStock(stock-1)}}>Comprar</button>
        </div>
    )

}

export default Libro;