import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
function Cabecera(){
    return(
    <div>
        <h1>Fotos animales</h1>
        <nav> <Link to="/gatos">Gatos</Link></nav>
        <nav> <Link to="/perros">Perros</Link></nav>
    </div>

    )
}
export default Cabecera;