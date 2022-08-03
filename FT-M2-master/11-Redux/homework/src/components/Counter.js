import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement, par, delay ,double,ndouble,x} from '../actions';

class Counter extends Component {

    render() {
        // Completa las funciones onClick de los botones   
        // Al hacer clic en estos botones, el recuento debe disminuir o aumentar en consecuencia
        return (
            <div>
                Clickeado: {this.props.count} veces
                <div>
                <button onClick={() => {this.props.increment()}}>+ {/* Incremeta */}</button>
                <button onClick={() => {this.props.decrement()}}>-  {/* Decrementa */}</button>
                <button onClick={() => {this.props.par()}}>par</button>
                <button onClick={() => {setTimeout(()=>this.props.delay(),1000)}}>delay</button> 
                <button onClick={() => {this.props.double()}}>+2 </button>
                <button onClick={() => {this.props.ndouble()}}>-2 </button> 
                <button onClick={() => {this.props.x()}}>*2</button> 
                </div>
            </div>
        );
    }
}

// La función mapStateToProps especifica qué porción del árbol de estados necesita recibir este componente.
// En este caso, dado que nuestro store de redux sólo almacena el valor del contador,
// este componente recibe el estado completo.
// Sin embargo, en una aplicación redux más compleja,
// recibiría sólo las partes relevantes que necesita del objeto de estado.
const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

// Se llama a la función de connect para que este componente conozca el resto de la arquitectura de redux.
// Sin esto, este componente es sólo un componente tonto de React.
//Pasamos todas las funciones que dependen de Redux, junto con el propio componente,
// para que Redux se dé a conocer a este componente.
export default connect(mapStateToProps, { increment, decrement, par, delay,double,ndouble,x})(Counter);
