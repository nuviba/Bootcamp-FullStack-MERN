import logo from './logo.svg';
import './App.css';
import Cabecera from './Cabecera';
import Main from './Main';
import Footer from './Footer';
import videoclub from './videoclub';

function App() {
  return (
    <>
    <Cabecera titulo="Videoclub del Barrio" subtitulo="Las pelis de toda la vida" />
    <Main peliculas={videoclub.peliculas} />
    <Footer telefono="Telf:666777888" email="videoclub@delbarrio.es" />
    </>
  );
}

export default App;
