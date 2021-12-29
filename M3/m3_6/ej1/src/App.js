import React, {useState,useEffect} from 'react';
import './App.css';
function App() {
  const [data ,setData]=useState([]);
  const [siguiente, setSiguiente]=useState("");
  const [anterior, setAnterior]=useState("");
  const [ruta, setRuta]= useState("https://rickandmortyapi.com/api/character/");

  //es importante inicializar el estado con el tipo de dato que va a acabar almacenando

  useEffect(function () {
    fetch(ruta)
        .then(respuesta =>
        respuesta.json())
        .then((datos) => {
          setData(datos.results);
          setSiguiente(datos.info.next);
          setAnterior(datos.info.prev);
        })
}, [ruta])
  let personajes=data.map((personaje, i)=>{
    return(
      <div key={i} className="card">
      <img src={personaje.image} alt={personaje.name}/>
      <h3>{personaje.name}</h3>
      </div>
  );
  });
  return (
  <>
  <div className="main">{personajes}</div>
  <button onClick={function(){
    if(anterior!==null){
      setRuta(anterior)}
    else{
      setRuta("https://rickandmortyapi.com/api/character/")
    }
      }}>Página anterior</button>
  <button onClick={function(){setRuta(siguiente)}}>Página siguiente</button>
  
  </>
  )
  
    
}

export default App;
