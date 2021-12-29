import React from "react";

function MostrarPeli(props){

return  ( 
  <div className="card">
    <img src={props.peli.cartel} alt={props.peli.titulo}></img>
    <h3>{props.peli.titulo}</h3>
    <p>{props.peli.sinopsis}</p>
  </div>);
}

function Main(props){
  let peliculasFinal = props.peliculas.map(function(pelicula) {
    return( 
        <MostrarPeli peli={pelicula} />
    )
 
    })
    return (<div className="catalogo">{peliculasFinal}</div> ) 
}
export default Main;