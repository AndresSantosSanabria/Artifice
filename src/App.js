import './App.css';
//Router
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

//Componentes
import Nav from "./components/Nav/Navbar.jsx"
import BtnW from "./components/btnFlotante/BtnW.jsx";
import Footer from "./components/Footer/Footer.jsx";
//PAGINAS
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios.jsx';
import Portafolio from './pages/Portafolio.jsx';
import Galeria from './pages/Galeria.jsx';
import Error404 from './pages/Error404';




function App() {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Nosotros' element={<Nosotros/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='/Servicios' element={<Servicios/>}/>
        <Route path='/Portafolio' element={<Portafolio/>}/>
        <Route path='/Galeria' element={<Galeria/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <BtnW></BtnW>
      <Footer></Footer>
    </Router>
  );
}

export default App;
