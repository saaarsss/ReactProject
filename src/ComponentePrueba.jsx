import React from "react";
//acceso a la libreria
import PropTypes from 'prop-types';

// let estudiante = {
//     nombre: "juan",
//     edad: 12
// }
//  var genero = "M"

const ComponentePrueba = ({nombre, edad, genero}) =>(
     <>
        <div className="card" style={ {width:'18rem;'}}>
             <div class="card-body">
             <h5 class="card-title">{nombre ? nombre : "nombre no asignado"}</h5>
                <p className="card-text">edad: { edad }</p>
                <p className="card-text">genero: { genero }</p>
              </div>    
        </div>
     </>
);

ComponentePrueba.propTypes ={
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string

}
//si el nombre no llega el lo va a tomar como
ComponentePrueba.defaultProps = {
    nombre: "No asignado",
    edad: "No asignado",
    genero: "No asignado"
}
export default ComponentePrueba;