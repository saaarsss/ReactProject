import React from "react";

let estudiante = {
    nombre: "juan",
    edad: 12
}


const ComponentePrueba = () =>(
     <>
        <div className="card" style={ {width:'18rem;'}}>
             <div class="card-body">
             <h5 class="card-title">{estudiante.nombre}</h5>
                <p className="card-text">edad: { estudiante.edad }</p>
              </div>    
        </div>
     </>
);

export default ComponentePrueba;