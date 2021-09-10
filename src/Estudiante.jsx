import React from "react";
import PropTypes from 'prop-types';

//recibir los promps
const Estudiante = ({nombre, edad, genero}) =>(

        <>
           <div className="card col-md-4" style={ {width:'18rem;'}}>
                <div class="card-body">
                <h5 class="card-title">{nombre }</h5>
                   <p className="card-text">edad: { edad }</p>
                   <p className="card-text">genero: { genero }</p>
                 </div>    
           </div>
        </>

    );

    Estudiante.propTypes ={
        nombre: PropTypes.string,
        edad: PropTypes.number,
        genero: PropTypes.string
    
    }
    //si el nombre no llega el lo va a tomar como
    Estudiante.defaultProps = {
        nombre: "No asignado",
        edad: "No asignado",
        genero: "No asignado"
    }
    
    export default Estudiante;