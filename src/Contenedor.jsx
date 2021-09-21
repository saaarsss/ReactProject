import React from "react";
import Estudiante from "./Estudiante";
import Formulario from "./Formulario";

const Estudiantes  = [
    {
        //ponemos cada uno de los objetos
        "nombre": "sara",
        "edad" : 18,
        "genero" :  "Femme"
    },
    {
        //ponemos cada uno de los objetos
        "nombre": "nicolai",
        "edad" : 23,
        "genero" :  "homme"
    },
    {
        //ponemos cada uno de los objetos
        "nombre": "sofia",
        "edad" : 18,
        "genero" :  "Femme"
    },
    {
        //ponemos cada uno de los objetos
        "nombre": "carlos",
        "edad" : 25,
        "genero" :  "homme"
    },
    {
        //ponemos cada uno de los objetos
        "nombre": "Angell",
        "edad" : 20,
        "genero" :  "Femme"
    },
    {
        //ponemos cada uno de los objetos
        "nombre": "Mario",
        "edad" : 22,
        "genero" :  "homme"
    },
]

const Contenedor = () =>(
//estructura de contenedor estandar 
     <>
      {
          //pasando datos de forma dinamica
          //va a iterar e imprimir 6 estudiantes
          //Estudiantes.map( c => <Estudiante nombre={c.nombre} edad={c.edad} genero={c.genero}/>)
      }

        <Formulario/>

     </>
);
export default Contenedor;

