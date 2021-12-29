import logo from './logo.svg';
import './App.css';

let arraytres=["perro","gato","tortuga"];

function App() {
  function Recibirarray(props){
    return(
      <div>
        <ul>
          <li>{props.array[0]}</li>
          <li>{props.array[1]}</li>
          <li>{props.array[2]}</li>
        </ul>
      </div>
    )
  }
  return (
    <div className="App">
      <Recibirarray array={arraytres}/>

    </div>
  );
}

export default App;
