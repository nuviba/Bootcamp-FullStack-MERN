import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

import videoclub from './videoclub';
import Main from './Main';
import MostrarPeli from './Peli';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<div className="App">
      <Main videoclub={videoclub.peliculas}/>
      </div>}/>
        <Route path="/peli1" element={<MostrarPeli pelicula={videoclub.peliculas[0]} dir="/peli1"/>}/>
        <Route path="/peli2" element={<MostrarPeli pelicula={videoclub.peliculas[1]} dir="/peli2"/>}/>
        <Route path="/peli3" element={<MostrarPeli pelicula={videoclub.peliculas[2]} dir="/peli3"/>}/>
        <Route path="/peli4" element={<MostrarPeli pelicula={videoclub.peliculas[3]} dir="/peli4"/>}/>
        <Route path="/peli5" element={<MostrarPeli pelicula={videoclub.peliculas[4]} dir="/peli5"/>}/>
        <Route path="/peli6" element={<MostrarPeli pelicula={videoclub.peliculas[5]} dir="/peli6"/>}/>
        <Route path="/peli7-1" element={<MostrarPeli pelicula={videoclub.peliculas[6]} dir="/peli7-1"/>}/>
        <Route path="/peli7-2" element={<MostrarPeli pelicula={videoclub.peliculas[7]} dir="/peli7-2"/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
