/* 4. Crea una aplicación con un contador de clicks. Cada vez que hagas click en un
botón se sumará 1. */
import './App.css';
import React, {useState} from 'react';

function App() {
  let [num,setNumero]=useState(0);
  function sumanum(){
    setNumero(num+1);

}

  return (
    <>
    <h1>{num}</h1>
      <button onClick={sumanum}>Click</button>
    </>
      
      
   
  );
}

export default App;





