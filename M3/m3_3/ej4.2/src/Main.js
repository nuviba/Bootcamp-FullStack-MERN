import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
function MostrarJugadoras(props){
    let ruta = "/"+props.jugadoras.id;
    let jugadoras= <div className="card">
        <img src={props.jugadoras.foto} alt={props.jugadoras.nombre}></img>
        <h2>{props.jugadoras.nombre}</h2>
        <Link to={ruta}>Ver ficha</Link>
    </div>
    return jugadoras
};
function Main(props){
    let datos= props.jugadoras.map(function(jugadora){
        return (
            <MostrarJugadoras jugadoras={jugadora}/>
            
        )

    })

    return(<div className="main">{datos}</div> )

}
export default Main;