import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import jugadoras from './jugadoras';
import Cabecera from './Cabecera';
import Main from './Main';
import MostrarJugadora from './jugadora';

function App() {
  const rutas= jugadoras.map((jugadora,i)=>{
    return(
      <Route key={i} path={"/"+jugadora.id} element={<MostrarJugadora key={i} jugadora={jugadora}/>}/>
    );
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="App">
        <Cabecera/>
        <Main jugadoras={jugadoras}/>
        </div>}/>
        {rutas}
      </Routes>
    </BrowserRouter>)
}

export default App;
