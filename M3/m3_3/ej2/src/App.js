import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Gatos from './Gatos';
import Perros from './Perros';
import Cabecera from './Cabecera';

function App() {
  let arrayGatos=["https://www.bunko.pet/__export/1614989689913/sites/debate/img/2021/03/05/nombres_de_gatos_crop1614989651864.jpeg_976912859.jpeg","https://www.nombresdeperros.eu/wp-content/uploads/2021/01/mejores-nombres-para-gatos-pequenos-y-bonitos.jpg","https://cadenaser00.epimg.net/ser/imagenes/2014/11/09/album/1415554106_551162_1415554847_album_normal.jpg"];
  let arrayPerros=["https://aperrados.com/wp-content/uploads/2016/12/chihuahua-razas-de-perros-pequenos-bonitos-600x273.jpg","https://i.ytimg.com/vi/_eaM25wdxYs/maxresdefault.jpg","https://www.hotelesparaperrosmexico.com/img/fotos/bonitos_0002.jpg"];
  return (
    <BrowserRouter>
    <Cabecera/>
    <Routes>
      <Route path="/gatos" element={<Gatos imagenes={arrayGatos} />} />
      <Route path="/perros" element={<Perros imagenes={arrayPerros}/>} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
