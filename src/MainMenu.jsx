import react from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home";

const MainMenu = () => (
     <ul>
         <li><NavLink to="/">Home</NavLink></li>
         <li><NavLink to="/Personaje">Personajes</NavLink></li>
         <li><NavLink to="/contacto">Contacto</NavLink></li>
     </ul>
);

export default MainMenu;