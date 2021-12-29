import { useState } from "react";

function Main(props){
    let[tripulantes1 , setTripulantes1]=useState(props.barco1.tripulantes);
    let[tripulantes2 , setTripulantes2]=useState(props.barco2.tripulantes);
    
        return(
            <div>
                <div>
                    <p>Nombre barco: {props.barco1.nombre}</p>
                    <p>Nº Tripulantes: {tripulantes1}</p>
                    <button onClick={function(){setTripulantes1(tripulantes1+1)}}>+</button>
                </div>
                <div>
                    <p>Nombre barco: {props.barco2.nombre}</p>
                    <p>Nº Tripulantes: {tripulantes2}</p>
                    <button onClick={function(){setTripulantes2(tripulantes2+1)}}>+</button>
                </div>
            </div>
        )
}

export default Main

