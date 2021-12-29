import React, {useState,useEffect} from 'react';
import './App.css';


function App() {
  const [data ,setData]=useState([]);
  const [data2 ,setData2]=useState([]);
  const [data3 ,setData3]=useState([]);
  const[vselect ,setVselect]=useState("");

  useEffect(function () {
    fetch("https://swapi.dev/api/planets/")
        .then(respuesta =>
        respuesta.json())
        .then((datos) => {
          setData(datos.results);
        })
  }, [])

  let planetas=data.map((planeta, i)=>{
    return<option key={planeta.name} value={planeta.url}>{planeta.name}</option> 
  });

  useEffect(function () {
    fetch(vselect)
        .then(respuesta =>
        respuesta.json())
        .then((datos) => {
          setData2(datos.residents);
        })
  }, [vselect])

  useEffect(() => {
         Promise.all(data2.map(link=>
         fetch(link)
         .then(res => res.json()).then((json)=>json.name))
        ).then(datos => { setData3(datos) })
  },[data2])
  
  let lista=data3.map((personaje, i)=>{
        return <li key={personaje}>{personaje}</li>
    })
    
  return (
    <div className="main">
     <select value={vselect} onChange={(event)=>setVselect(event.target.value)}>{planetas}</select>
     <ul>{lista}</ul>
    </div>
  );
}
export default App;
