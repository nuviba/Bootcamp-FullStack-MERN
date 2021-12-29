import React from "react";

function Mostrarcoches(props){
    return(
        <table border="2">
            <tr >
                <th>Modelo</th>
                <td>{props.coches.modelo}</td>  
            </tr>
            <tr>
                <th>Nº Ruedas</th>
                <td>{props.coches.numruedas}</td>  
            </tr>
            <tr>
                <th>Altura</th>
                <td>{props.coches.altura}</td>  
            </tr>
            <tr>
                <th>Longitud</th>
                <td>{props.coches.longitud}</td>  
            </tr>
            <tr>
                <th>Color</th>
                <td>{props.coches.color}</td>  
            </tr>
        </table>
    )
}
function Main(props){
   
      return (
          <div>
            <Mostrarcoches coches={props.coches1}/>
            <Mostrarcoches coches={props.coches2}/>
            <Mostrarcoches coches={props.coches3}/>
            <Mostrarcoches coches={props.coches4}/>
          </div>
      ) 
  }

export default Main;