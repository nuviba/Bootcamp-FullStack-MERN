import './App.css';
import {useState} from "react";

function App() {
  let nombres=["Alex","Quim","Vick"]
  let [i, setIndex]=useState(0);

  let [nombre,setNombre]=useState(nombres[0]);

  function cambiarNombre(){
    if(i<2){
      setIndex(i+1);
      setNombre(nombres[i]);
    }
    else{
      //console.log('else')
      setIndex(0);
      setNombre(nombres[i]);
    }
    //console.log(nombre);
  }
  return (
    <div className="App">
      <h1>{nombre}</h1>
      <button onClick={cambiarNombre}>Cambiar Nombre</button>
    </div>
  );
}

export default App;
