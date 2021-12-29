import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
function Cabecera(){
    return(
    <div>
        <h1>Rutas en React</h1>
        <nav> <Link to="/nombres">Nombres</Link></nav>
    </div>

    )
}
export default Cabecera;