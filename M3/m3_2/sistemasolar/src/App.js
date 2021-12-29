import './App.css';
import { useState, React } from "react";

import sistemaSolar from './sistemasolar';

function App() {
  let [sSolar, setSSolar] = useState(sistemaSolar);
  console.log(sSolar)

  function borrarPlaneta(i){
    let array=[...sSolar];
    array.splice(i,1);
    setSSolar(array);}

    let respuesta = sSolar.map((planeta,idx)=>{
      return <div className="card" key={idx}>
      <img src={planeta.imagen} alt={planeta.nombre}></img>
      <h1>{planeta.nombre}</h1>
      <p>Temperatura: {planeta.temperatura}</p>
      <p>Color: {planeta.color}</p>
      <button onClick={()=>{borrarPlaneta(idx)}}>Eliminar</button>
    </div>
    })
  

  return (
      <div>{respuesta}</div>
  );
}

export default App;
