import React from "react";
import PropTypes from 'prop-types';

//recibir los promps
const Personaje = ({imagen, nombre, edad, genero, papel}) =>(

        <>
           <div className="card col-md-4" style={ {width:'18rem;'}}>
                <div class="card-body">
                <p className="image"> { imagen }</p>
                <h5 class="card-title">{nombre }</h5>
                   <p className="card-text">edad: { edad }</p>
                   <p className="card-text">genero: { genero }</p>
                   <p className="card-text">papel: { papel }</p>
                 </div>    
           </div>
        </>

    );

    Personaje.propTypes ={
        imagen: PropTypes.symbol,
        nombre: PropTypes.string,
        edad: PropTypes.number,
        genero: PropTypes.string,
        papel: PropTypes.string

    
    }
    //si el nombre no llega el lo va a tomar como
    Personaje.defaultProps = {
        nombre: "No asignado",
        edad: "No asignado",
        genero: "No asignado",
        papel: "No asignado",
    }
    
    export default Personaje;