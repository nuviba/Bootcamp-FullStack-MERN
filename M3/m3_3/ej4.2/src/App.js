import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

import jugadoras from './jugadoras';
import Cabecera from './Cabecera';
import Main from './Main';
import MostrarJugadora from './jugadora';

function App() {
  return (
<BrowserRouter>
      
<Routes>
  
  <Route path="/" element={<div className="App">
<Cabecera/>
<Main jugadoras={jugadoras}/>
</div>}/>
  <Route path="/alba-torrens" element={<MostrarJugadora jugadora={jugadoras[0]} dir="/alba-torrens"/>}/>
  <Route path="/laia-palau" element={<MostrarJugadora jugadora={jugadoras[1]} dir="/laia-palau"/>}/>
  <Route path="/silvia-dominguez" element={<MostrarJugadora jugadora={jugadoras[2]} dir="/silvia-dominguez"/>}/>
  <Route path="/maria-conde" element={<MostrarJugadora jugadora={jugadoras[3]} dir="/maria-conde"/>}/>
  <Route path="/laura-nicholls" element={<MostrarJugadora jugadora={jugadoras[4]} dir="/laura-nicholls"/>}/>

</Routes>
</BrowserRouter>
    
  )
}

export default App;
