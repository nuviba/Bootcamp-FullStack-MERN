import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { useParams } from 'react-router';
import { useState , React} from 'react';


function App() {
  let [nombre,setNombre]=useState("");

  function cambiarNombre(event){
    setNombre(event.target.value)
    
  }
  function Saludo(){
    let params=useParams();
    let nombre=params.nombre;
    return(
      <p>¡Hola {nombre}!</p>
    )
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
        <div>
            <input type="text" value={nombre} onChange={cambiarNombre}/>
            <Link to={'/saludo/'+nombre}>Saludar</Link>
        </div>}/>
        <Route exact path='/saludo/:nombre' element={<Saludo/>}/>

      </Routes>
     
      
      </BrowserRouter>
  );
}

export default App;


/* Crea una aplicación que tenga un Input de tipo texto y un link. En el input deberás introducir tu nombre y al hacer click en el link nos llevará a una página que diga “Hola” y el nombre introducido en el Input. */