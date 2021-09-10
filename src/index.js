import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NewComponent from './NewComponent';
import Header from './Header';
import Footer from './Footer';
import ComponentePrueba from './ComponentePrueba';


ReactDOM.render(
  <Header/>,
  document.getElementById('header')
);

ReactDOM.render(
  <Footer/>,
  document.getElementById('footer')
);

ReactDOM.render(
  <ComponentePrueba/>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
