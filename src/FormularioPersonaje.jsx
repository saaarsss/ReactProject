import React, {Component} from "react";
//componente de clase
class FormularioPersonaje extends Component{

    constructor(props){
        super(props)

        this.state = {
                nombre: "nombre state"
        }
   
        this.cambiarNombre = this.cambiarNombre.bind(this);
    }

    cambiarNombre(i){
        this.setState({
            nombre: i.target.value
        });
    }

    render(){
        return(
            <div>
                <h1>
                    <form action="">
                        <label htmlFor="">Nombre</label><br/>
                        <input type="text"  onChange={ this.cambiarNombre } /><br/>
                        <input type="submit" value="Enviar" />
                    </form>
                </h1>

                <h3>{ `Hola ${this.state.nombre}` }</h3>

            </div>
        )
    }

}


export default FormularioPersonaje;