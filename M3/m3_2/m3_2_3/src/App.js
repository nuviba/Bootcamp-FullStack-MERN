import './App.css';
import coches from './coches';
import Main from './Main';

function App() {
  
  return (
    <div className="App">
      
      <Main coches1={coches[0]} coches2={coches[1]} coches3={coches[2]} coches4={coches[3]} />
    </div>
  );
}

export default App;
