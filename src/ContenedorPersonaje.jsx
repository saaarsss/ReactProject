import React from "react";
import Personaje from "./Personaje";
import Once1 from './assets/img/Once1.PNG';
import Mike from './assets/img/Mike.PNG';
import Joyce from './assets/img/Joyce.jpg';
import JimHopper from './assets/img/JimHopper.jpg';
import Dustin from './assets/img/Dustin.jpg';
import Lucas from './assets/img/Lucas.jpg';
import Nancy from './assets/img/Nancy.jpg';
import Jonathan from './assets/img/Jonathan.jpg';



const Personajes  = [
    {
        //ponemos cada uno de los objetos
        "imagen" :  <img src={Once1}/>,
        "nombre" : "once",
        "edad" : 12,
        "genero" : "F",
        "papel" : "Principal"

    },
   
    {
        //ponemos cada uno de los objetos
        "imagen" :  <img src={Mike}/>,
        "nombre" : "Mike",
        "edad" : 12,
        "genero" : "M",
        "papel" : "Principal"
    },
    {
        //ponemos cada uno de los objetos
        "imagen" :  <img src={Joyce}/>,
        "nombre" : "Joyce Byers",
        "edad" : 49,
        "genero" : "F",
        "papel" : "Principal"
    },
    {
        //ponemos cada uno de los objetos
        "imagen" :  <img src={JimHopper}/>,
        "nombre" : "Jim Hopper",
        "edad" : 46,
        "genero" : "M",
        "papel" : "Principal"
    },
    {
        //ponemos cada uno de los objetos
        "imagen" :  <img src={Dustin}/>,
        "nombre" : "Dustin Henderson",
        "edad" : 19,
        "genero" : "M",
        "papel" : "Principal"
    },
    {
        //ponemos cada uno de los objetos
        "imagen" :  <img src={Lucas}/>,
        "nombre" : "Lucas Sinclair",
        "edad" : 19,
        "genero" : "M",
        "papel" : "Principal"
    },
    {
        //ponemos cada uno de los objetos
        "imagen" :  <img src={Nancy}/>,
        "nombre" : "Nancy Wheeler",
        "edad" : 26,
        "genero" : "F",
        "papel" : "Principal"
    },
    {
        //ponemos cada uno de los objetos
        "imagen" :  <img src={Jonathan}/>,
        "nombre" : "Jonathan Byers",
        "edad" : 27,
        "genero" : "M",
        "papel" : "Principal"
    },
    
]

const ContenedorPersonaje = () =>(
//estructura de contenedor estandar 
     <>
      {
          //pasando datos de forma dinamica
          //va a iterar e imprimir 6 estudiantes
          Personajes.map( c => <Personaje imagen={c.imagen}nombre={c.nombre} edad={c.edad} genero={c.genero} papel={c.papel}/>)
      }
     </>
);
export default ContenedorPersonaje;
