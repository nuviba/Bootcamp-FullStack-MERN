import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import videoclub from './videoclub';

 function MostrarPelis(props){
    
    let ruta = "/"+props.pelicula.id;
    let pelicula=
    <div className="card">
        <img src={props.pelicula.cartel} alt={props.pelicula.titulo}></img>
        <h2>{props.pelicula.titulo}</h2>
        <Link to={ruta}>Ver sinópsis</Link>



    </div>
        

    return pelicula
} 
 
function Main(props){
    let datos= props.videoclub.map(function(pelicula){
        return (
            <MostrarPelis pelicula={pelicula}/>
            
        )

    })

    return(<div className="main">{datos}</div> )

}
export default Main;