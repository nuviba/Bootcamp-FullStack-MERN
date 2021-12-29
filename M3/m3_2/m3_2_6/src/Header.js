import { useState } from "react";

function Header (props){
    let mensaje = props.user.nombre;
    let [esVip, setEsVip] = useState(props.user.vip);
    
    if(esVip){
      mensaje = "¡Bienvenid@ "+props.user.nombre+"!"}

    else{
      mensaje=props.user.nombre}
    
     function sinoVip(){
      if(esVip)
      setEsVip(false)
      else{
        setEsVip(true)
      }
    }
     
    
    return(
        <div className="cabecera">
            
            <h1>{mensaje}</h1>
            <img
            src={props.user.imagen} 
            alt={props.user.nombre}></img>
            <button onClick={sinoVip}>Cambiar VIP</button>
            
            
            
        </div>
        
    )

}
export default Header