import {Link} from 'react-router-dom';

function MostrarJugadora(props){

    return(
        <div className="jugadora">
                <img src={props.jugadora.foto} alt={props.jugadora.nombre}></img>
                <h1>{props.jugadora.nombre}</h1>
                <p><b>Año nacimiento:</b>{props.jugadora.fecha}</p>
                <p><b>Estatura:</b>{props.jugadora.estatura}</p>
                <Link to="/">Inicio</Link> 
        </div>
    
    )
} 

export default MostrarJugadora;