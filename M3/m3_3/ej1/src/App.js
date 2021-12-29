import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Cabecera from './Cabecera';

function App() {
  let nombres=["Quim","Pok","Pupita"]
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Cabecera/>} />
        <Route path="/nombres" element={<MostrarNombres nombres={nombres}/>} />
   
    </Routes>
    
    </BrowserRouter>
    
  );
}

function MostrarNombres(props){
  let datos=props.nombres.map(function(nombre){
    return(
      <h1>{nombre}</h1>
    )
  })
  return(

    <div>{datos}
    <nav> <Link to="/">Inicio</Link></nav>
    </div>
    )

}
export default App;
