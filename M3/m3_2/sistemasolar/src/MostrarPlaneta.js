function MostrarPlaneta(props){
    
    return <div className="card">
    <img src={props.planeta.imagen} alt={props.planeta.nombre}></img>
    <h1>{props.planeta.nombre}</h1>
    <p>Temperatura: {props.planeta.temperatura}</p>
    <p>Color: {props.planeta.color}</p>
    <button onClick={props.borrar(props.idx)}>Eliminar</button>
  </div>;
}

export default MostrarPlaneta;