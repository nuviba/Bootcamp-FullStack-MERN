import './App.css';
import evento from './evento';

function App() {
  function Mostrarevent(props){
    return(
      <div>
        <p>Nombre:{props.evento.nombre}</p>
        <p>Fecha:{props.evento.fecha}</p>
        <p>Hora:{props.evento.hora}</p>
        <p>Dirección:{props.evento.lugar.direccion}</p>
        <p>Ciudad:{props.evento.lugar.ciudad}</p>
      </div>
    )}
  return (
    <div className="App">
    <Mostrarevent evento={evento} />
    </div>
  );
}

export default App;
