
function EliminarMusico(props){
    

return(
    <div>
        <input type="text" value={props.nombre2} onChange={props.cambiarNombre2} />
        <button onClick={props.eliminarBoton}>Borrar</button>
        <p>{props.feedbackE}</p>
        
        
       
    </div>
)}

export default EliminarMusico;