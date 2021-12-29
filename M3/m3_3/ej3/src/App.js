import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import {useState} from 'react';
import videoclub from './videoclub';



function App() {
  const [peliculas,setPeliculas]=useState(videoclub);

  function Pelicula({ pelicula, full }) {
    if (full) {
      return (
        
          <div className="card">
          <img src={pelicula.cartel} alt={pelicula.titulo} />
          <Link to={"/" + pelicula.titulo.replace(/ |[áéíóú]/g, "-")}>
            <h3>{pelicula.titulo}</h3>
          </Link>
        </div> 
      );
    } else {
      return (
        <div className="pelicula">
          <img src={pelicula.cartel} alt={pelicula.titulo} />
          <p>{pelicula.sinopsis}</p>
          <Link to="/">Inicio</Link>
        </div>
      );
    }
  }

  function Peliculas(props) {
    return props.peliculas.map((pelicula, index) => {
      return (
        <div className="main">
          <Pelicula key={index} full={true} pelicula={pelicula} />
        </div>
      );
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        
        <Route exact path="/" element={<Peliculas peliculas={peliculas} />} />
        {peliculas.map((pelicula) => {
          
          return (
            <Route
              path={"/" + pelicula.titulo.replace(/ |[áéíóú]/g, "-")}
              element={<Pelicula pelicula={pelicula} full={false} />}
            />
          );
        })}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
