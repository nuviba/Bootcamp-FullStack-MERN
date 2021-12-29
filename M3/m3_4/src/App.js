import './App.css';
import {useState, React} from 'react';
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom'

import Musicos from './Musicos';
import EliminarMusico from './EliminarMusico';
import Cabecera from './Cabecera';


function App() {

  //ESTADOS
  let [feedbackI, setFeedbackI]=useState("");
  let [feedbackE, setFeedbackE]=useState("");
  let [musicos, setMusicos]=useState([
    {
      nombre:'Mozart', 
      fecha: 1756, 
      canciones: ['Symphonie Nr 40', 'Don Giovanni']},
    {
      nombre: 'Ludwig van Beethoven', 
      fecha: 1770,
      canciones: ['Symphonie No.5', 'Piano Sonata No.32']
    },
    {
      nombre: 'Johann Sebastian Bach', 
      fecha: 1685,
      canciones: ['Vivace', 'Largo ma non tanto']
    }
]);

  let [nombre,setNombre]=useState("");
  /* let [nombreMostrar ,setNombreMostrar]=useState(""); */
  let [nombre2, setNombre2]=useState("");

//FUNCIONES
  function cambiarNombre(event){
    setNombre(event.target.value)

  }
  /* function cambiarNombreMostrar(){
    setNombreMostrar(nombre)
  } */
  function masMusicos(){
    /* setNombreMostrar(nombre) */
    if(nombre!==""){
      let objeto={"nombre":nombre,"fecha":"","canciones":[]}
      let nuevoArray = [...musicos, objeto];
      console.log(musicos)
      setMusicos(nuevoArray)
      setNombre("")
      setFeedbackI("Músico guardado correctamente")
    }
    else{
      setFeedbackI("No se ha introducido ningún nombre")
    }
    
  }
  function cambiarNombre2(event){
    setNombre2(event.target.value)
  }
  function eliminarBoton(){
    let valor=nombre2;
    if (valor!==""){
      eliminarMusicos(valor);
      
    }
    else{
      setFeedbackE("No has introducido ningún valor")
    }
    

  }
  function eliminarMusicos(nombreAborrar){

    let nuevoArray=musicos.filter(function(musico){
      if(musico.nombre!==nombreAborrar){
        setFeedbackE("Elemento borrado correctamente")
        return true
        
      }
      else{
        return false
        
      }
        
      
    });
    if(nuevoArray.length===musicos.length){
      setFeedbackE("No se ha encontrado ningún músico con ese nombre")
    }else{
      console.log("Hola");
      setFeedbackE("Músico eliminado correctamente")
      setFeedbackI("")
    }  
    setMusicos(nuevoArray)
    setNombre2("")
  }

  return(
    <BrowserRouter>
      <Cabecera/>
      <Routes>
        <Route path="/" element={
        <div>
          <Musicos musicos={musicos}/>
          <input type="text" value={nombre} onChange={cambiarNombre} />
          <button onClick={masMusicos}>Mostrar</button>
          <p>{feedbackI}</p>
        </div>} />
        <Route path="/eliminar" element={
          <EliminarMusico nombre2={nombre2} cambiarNombre2={cambiarNombre2} eliminarBoton={eliminarBoton} feedbackE={feedbackE}/>} />
      </Routes> 
      

      
    </BrowserRouter>
    
    

    


    
  );
}

export default App;
