import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let clicks=1;
  let [fin,setFin]= useState("");

  function FinJuego(){
    console.log(val);
      if(
      (val[0]==val[1])&&(val[0]==val[2]&&val[0]==0)
      ||
      (val[3]==val[4])&&(val[3]==val[5]&&val[3]==0)
      ||
      (val[6]==val[7])&&(val[6]==val[8]&&val[6]==0)
      ||
      (val[0]==val[3])&&(val[0]==val[6]&&val[0]==0)
      ||
      (val[1]==val[4])&&(val[1]==val[7]&&val[1]==0)
      ||
      (val[2]==val[5])&&(val[2]==val[8]&&val[2]==0)
      ||
      (val[0]==val[4])&&(val[0]==val[8]&&val[0]==0)
      ||
      (val[2]==val[4])&&(val[2]==val[6]&&val[2]==0)
      )
      {
        setFin("Ha ganado X")
      }
      if(
        (val[0]==val[1])&&(val[0]==val[2]&&val[0]==1)
        ||
        (val[3]==val[4])&&(val[3]==val[5]&&val[3]==1)
        ||
        (val[6]==val[7])&&(val[6]==val[8]&&val[6]==1)
        ||
        (val[0]==val[3])&&(val[0]==val[6]&&val[0]==1)
        ||
        (val[1]==val[4])&&(val[1]==val[7]&&val[1]==1)
        ||
        (val[2]==val[5])&&(val[2]==val[8]&&val[2]==1)
        ||
        (val[0]==val[4])&&(val[0]==val[8]&&val[0]==1)
        ||
        (val[2]==val[4])&&(val[2]==val[6]&&val[2]==1)
        )
        {
          setFin("Ha ganado O")
        }
  }

  let val = []

  let [casilla1, setCasilla1]=useState(<button onClick={function(){clicks=clicks+1;if(clicks%2==0){val[0]=0;setCasilla1(<p>X</p>)}else{val[0]=1;setCasilla1(<p>O</p>)}FinJuego()}}>CLICK</button>);
  let [casilla2, setCasilla2]=useState(<button onClick={function(){clicks=clicks+1;if(clicks%2==0){val[1]=0;setCasilla2(<p>X</p>)}else{val[1]=1;setCasilla2(<p>O</p>)}FinJuego();}}>CLICK</button>);
  let [casilla3, setCasilla3]=useState(<button onClick={function(){clicks=clicks+1;if(clicks%2==0){val[2]=0;setCasilla3(<p>X</p>)}else{val[2]=1;setCasilla3(<p>O</p>)}FinJuego();}}>CLICK</button>);
  let [casilla4, setCasilla4]=useState(<button onClick={function(){clicks=clicks+1;if(clicks%2==0){val[3]=0;setCasilla4(<p>X</p>)}else{val[3]=1;setCasilla4(<p>O</p>)}FinJuego();}}>CLICK</button>);
  let [casilla5, setCasilla5]=useState(<button onClick={function(){clicks=clicks+1;if(clicks%2==0){val[4]=0;setCasilla5(<p>X</p>)}else{val[4]=1;setCasilla5(<p>O</p>)}FinJuego();}}>CLICK</button>);
  let [casilla6, setCasilla6]=useState(<button onClick={function(){clicks=clicks+1;if(clicks%2==0){val[5]=0;setCasilla6(<p>X</p>)}else{val[5]=1;setCasilla6(<p>O</p>)}FinJuego();}}>CLICK</button>);
  let [casilla7, setCasilla7]=useState(<button onClick={function(){clicks=clicks+1;if(clicks%2==0){val[6]=0;setCasilla7(<p>X</p>)}else{val[6]=1;setCasilla7(<p>O</p>)}FinJuego();}}>CLICK</button>);
  let [casilla8, setCasilla8]=useState(<button onClick={function(){clicks=clicks+1;if(clicks%2==0){val[7]=0;setCasilla8(<p>X</p>)}else{val[7]=1;setCasilla8(<p>O</p>)}FinJuego();}}>CLICK</button>);
  let [casilla9, setCasilla9]=useState(<button onClick={function(){clicks=clicks+1;if(clicks%2==0){val[8]=0;setCasilla9(<p>X</p>)}else{val[8]=1;setCasilla9(<p>O</p>)}FinJuego();}}>CLICK</button>);
  
  return (
   
    <div className="App">
      
      <div className="fila">
        <div className="columna"><h1>{casilla1}</h1></div>
        <div className="columna"><h1>{casilla2}</h1></div>
        <div className="columna"><h1>{casilla3}</h1></div>

      </div>
      <div className="fila">
        <div className="columna"><h1>{casilla4}</h1></div>
        <div className="columna"><h1>{casilla5}</h1></div>
        <div className="columna"><h1>{casilla6}</h1></div>

      </div>
      <div className="fila">
        <div className="columna"><h1>{casilla7}</h1></div>
        <div className="columna"><h1>{casilla8}</h1></div>
        <div className="columna"><h1>{casilla9}</h1></div>

      </div>
      <div className="fin">
       <b>{fin}</b> 
      </div>
      
      
    </div>
  );
}

export default App;
