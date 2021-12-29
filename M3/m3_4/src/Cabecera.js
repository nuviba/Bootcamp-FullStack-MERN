import { Link } from "react-router-dom";

function Cabecera (){
    return(
        <div>
            <nav>
                <Link to="/">Inicio</Link>
            </nav>
            <nav>
                <Link to="/eliminar">Eliminar</Link>
            </nav>
        </div>
    )

}
export default Cabecera;