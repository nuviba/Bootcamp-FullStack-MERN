import React, {useState,useEffect} from 'react';
import './App.css';

function App() {
  const [data ,setData]=useState([]);
  const [data2 ,setData2]=useState([]);
  const[vselect ,setVselect]=useState("");

  useEffect(function () {
    fetch("https://pokeapi.co/api/v2/type/")
        .then(respuesta =>
        respuesta.json())
        .then((datos) => {
          setData(datos.results);
        })
  }, [])

  useEffect(function () {
    fetch(vselect)
        .then(respuesta =>
        respuesta.json())
        .then((datos) => {
          let pokeArray = [];
        if (datos.pokemon.length > 0) {
          for (let i = 0; i < 3; i++) {
            pokeArray.push(
              datos.pokemon[Math.floor(Math.random() * datos.pokemon.length)]
            );
          }
        } else {
          pokeArray.push({ name: "No hay pokemons" });
        }

          setData2(pokeArray);
        })
  }, [vselect])

  let tipos=data.map((tipo, i)=>{
    return<option key={tipo.name} value={tipo.url}>{tipo.name}</option> 
  });

  let lista=data2.map((pokemon, i)=>{
    return <li key={pokemon.pokemon.name}>{pokemon.pokemon.name}</li>
  });

  return (
  <>
  <div className="main">
     <select value={vselect} onChange={(event)=>setVselect(event.target.value)}>{tipos}</select>
     <ul>{lista}</ul>
    </div>
  </>
  );
}

export default App;
