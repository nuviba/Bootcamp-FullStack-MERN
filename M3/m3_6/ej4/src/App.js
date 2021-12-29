import React, {useState,useEffect} from 'react';
import './App.css';

function Cartas(props){
  
  return(
    <div className="baraja">
      {props.baraja.map((carta)=>{
      return(
        <div className="styleCard">
          <img src={carta.imageUrl} alt={carta.name}></img>
          <h2>{carta.name}</h2>
          <p>{carta.text}</p>
      </div>
      )
      
    })}

    </div>
    
    
  )
}

function App() {
  const [data ,setData]=useState([]);
  const [data2 ,setData2]=useState([]);
  const[vselect ,setVselect]=useState("");

  let urlCards= 'https://api.magicthegathering.io/v1/cards?set=';
  
  useEffect(function () {
    fetch("https://api.magicthegathering.io/v1/sets")
        .then(respuesta =>
        respuesta.json())
        .then((datos) => {
          setData(datos.sets);
        })
  }, [])

  useEffect(function () {
    fetch(vselect)
        .then(respuesta =>
        respuesta.json())
        .then((datos) => {
          setData2(datos.cards);
        })
  }, [vselect])


  let sets=data.map((set, i)=>{
    return<option key={set.name} value={urlCards+set.code}>{set.name}</option> 
  });


  return (
    <>
    <div>
     <select value={vselect} onChange={(event)=>setVselect(event.target.value)}>{sets}</select>
    </div>
    <Cartas baraja={data2}/>
    </>
  );
}

export default App;
