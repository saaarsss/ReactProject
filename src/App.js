import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Contenedor from './Contenedor';
import Contacto from './Contacto';
import Home from './Home';
import FormularioPersonaje from './FormularioPersonaje';
import ContenedorPersonaje from './ContenedorPersonaje';
import Footer from './Footer';
import DetallePersonaje from './DetallePersonaje';
import MainMenu from './MainMenu';


function App() {
 
    return (
      <Router>
        <MainMenu/>
        <Route path="/" exact component={ Header } />
        <Route path="/Personaje" exact component={ ContenedorPersonaje } />
        <Route path="/contacto" exact component={ Contacto } />
        <Route path="/Personaje/:id" exact component={ DetallePersonaje } />
        <Route path="/Footer" exact component={ Footer } />
        <Route path="/Header" exact component={ Header } />
        <Route path="/home" exact component={ Home } />
        <Route path="/FormularioP" exact component={ FormularioPersonaje } />
      </Router>
    )
}

export default App;