import React from "react";

function Cabecera(props){
    return(
        <header>
           <div className="cabecera">
           <h1>
                {props.titulo}
            </h1>
            <h3>
                {props.subtitulo}
            </h3>
           </div>
        </header>
    )
}
export default Cabecera;