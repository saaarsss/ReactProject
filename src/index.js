import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NewComponent from './NewComponent';

import Footer from './Footer';
import ComponentePrueba from './ComponentePrueba';
import Contenedor from './Contenedor';
import ContenedorPersonaje from './ContenedorPersonaje';


// ReactDOM.render(
//   <Header/>,
//   document.getElementById('header')
// );

// ReactDOM.render(
//   <Footer/>,
//   document.getElementById('footer')
// );

// // ReactDOM.render(
// //   <ComponentePrueba nombre="sara" edad="18" genero="Femme"/>,
// //   document.getElementById('root')
// // );

// // ReactDOM.render(
// //   <Contenedor/>,
// //   document.getElementById('root')
// // );

// ReactDOM.render(
//   <ContenedorPersonaje/>,
//   document.getElementById('root3')
// );


ReactDOM.render(
  <App/>,
  document.getElementById('header')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
