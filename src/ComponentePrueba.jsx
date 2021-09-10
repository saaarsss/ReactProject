import React from "react";

let estudiante = {
    nombre: "juan",
    edad: 12
}
 var genero = "M"

const ComponentePrueba = ({nombre, edad, genero}) =>(
     <>
        <div className="card" style={ {width:'18rem;'}}>
             <div class="card-body">
             <h5 class="card-title">{nombre}</h5>
                <p className="card-text">edad: { edad }</p>
                <p className="card-text">genero: { genero }</p>
              </div>    
        </div>
     </>
);

export default ComponentePrueba;