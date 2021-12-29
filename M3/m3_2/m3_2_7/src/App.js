import './App.css';

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  let muelle = {
    nombre: 'Puerto deportivo',
    barcos: [
    {
    nombre: 'bar quito',
    eslora: '5m',
    tripulantes: 2
    },
    {
    nombre: 'imperioso',
    eslora: '12m',
    tripulantes: 3
    }
    ],
    contacto: {
    telefono: '94463827'
    }
    };

  return (
    <div>
      <Header nombre={muelle.nombre}/>
      <Main barco1={muelle.barcos[0]} barco2={muelle.barcos[1]}/>
      <Footer contacto={muelle.contacto.telefono}/>

    </div>
    
    
  );
}

export default App;
