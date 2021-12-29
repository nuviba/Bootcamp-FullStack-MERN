import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { useParams } from 'react-router';
import { useState , React} from 'react';

function App() {
  let [num1, setNum1]= useState(0);
  let [num2, setNum2]= useState(0);
  
function Operaciones (){
  let num1=parseInt(useParams().num1);
  let num2=parseInt(useParams().num2);

    return(
      <div>
        <h2>{num1}+{num2}={num1+num2}</h2>
        <h2>{num1}-{num2}={num1-num2}</h2>
        <h2>{num1}*{num2}={num1*num2}</h2>
        <h2>{num1}/{num2}={num1/num2}</h2>
        <h2>{num1}%{num2}={num1%num2}</h2>
      </div>
    )
  }
  return (
    <BrowserRouter>
    <div className="App">
            <button onClick={function(){setNum1(0);setNum2(0);}}>Reset</button>
            <h1>{num1}</h1>
            <button onClick={function(){setNum1(num1+1)}}>+</button>
            <button onClick={function(){setNum1(num1-1)}}>-</button>
            <h1>{num2}</h1>
            <button onClick={function(){setNum2(num2+1)}}>+</button>
            <button onClick={function(){setNum2(num2-1)}}>-</button>
            <Link to={'/operar/'+num1+'/'+num2}>Operar</Link>
      </div>
      <Routes>
        <Route exact path="/operar/:num1/:num2" element={<><Operaciones/> <Link to="/">Ocultar operaciones</Link></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


/* Crea una aplicación que tenga cuatro botones (Dos de sumar y dos de restar) que controlen dos “números” y añade un Link. Haz que al pulsar los botones el cambio en los números se vea reflejado en pantalla y que al hacer click en el link que aparezca la suma, la resta, multiplicación, división y resto de ambos números. Por último, añade un Link para ocultar los resultados y un botón que ponga a 0 ambos números. 

 */