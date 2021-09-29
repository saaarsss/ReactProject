import react from "react";
import { Link } from "react-router-dom";
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
        "id": 1,
        "imagen" :  <img src={Once1}/>,
        "nombre" : "once",
        "edad" : 12,
        "genero" : "F",
        "papel" : "Principal"

    },
   
    {
        //ponemos cada uno de los objetos
        "id": 2,
        "imagen" :  <img src={Mike}/>,
        "nombre" : "Mike",
        "edad" : 12,
        "genero" : "M",
        "papel" : "Principal"
    },
    {
        //ponemos cada uno de los objetos
        "id": 3,
        "imagen" :  <img src={Joyce}/>,
        "nombre" : "Joyce Byers",
        "edad" : 49,
        "genero" : "F",
        "papel" : "Principal"
    },
    {
        //ponemos cada uno de los objetos
        "id": 4,
        "imagen" :  <img src={JimHopper}/>,
        "nombre" : "Jim Hopper",
        "edad" : 46,
        "genero" : "M",
        "papel" : "Principal"
    },
    {
        //ponemos cada uno de los objetos
        "id": 5,
        "imagen" :  <img src={Dustin}/>,
        "nombre" : "Dustin Henderson",
        "edad" : 19,
        "genero" : "M",
        "papel" : "Principal"
    },
    {
        //ponemos cada uno de los objetos
        "id": 6,
        "imagen" :  <img src={Lucas}/>,
        "nombre" : "Lucas Sinclair",
        "edad" : 19,
        "genero" : "M",
        "papel" : "Principal"
    },
    {
        //ponemos cada uno de los objetos
        "id": 7,
        "imagen" :  <img src={Nancy}/>,
        "nombre" : "Nancy Wheeler",
        "edad" : 26,
        "genero" : "F",
        "papel" : "Principal"
    },
    {
        //ponemos cada uno de los objetos
        "id": 8,
        "imagen" :  <img src={Jonathan}/>,
        "nombre" : "Jonathan Byers",
        "edad" : 27,
        "genero" : "M",
        "papel" : "Principal"
    },
    
]


const DetallePersonaje= ({match}) => {


    let personaje = Personajes.filter(c => c.id === parseInt(match.params.id))[0]
    return (
        <>
        {
            personaje ? (
                <div className="card col-md-4" style={ {width:'18rem;'}}>
                    <div class="card-body">
                    <p className="image"> { personaje.imagen }</p>
                    <h5 className="card-title">{ personaje.nombre }</h5>
                        <p className="card-text">edad: { personaje.edad }</p>
                        <p className="card-text">genero: { personaje.genero }</p>
                        <p className="card-text">papel: { personaje.papel }</p>
                        
                    </div>    
                </div>

            ):
            <h1>Personaje no encontrado</h1>
        }

          <Link to={`/Personaje`}>Ver Todos</Link>    
     </>
    )
};

export default DetallePersonaje;