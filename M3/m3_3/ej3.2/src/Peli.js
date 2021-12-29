import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
function MostrarPeli(props){

    return(
        <div className="pelicula">
                <img src={props.pelicula.cartel} alt={props.pelicula.titulo}></img>
                <h1>{props.pelicula.titulo}</h1>
                <p>{props.pelicula.sinopsis}</p>
                <Link to="/">Inicio</Link>
                
        </div>
    
    )
} 
export default MostrarPeli;