import { INCREMENT, DECREMENT, PAR,DELAY,DOUBLE,NDOUBLE,X} from '../actions';

const initialState = {
  count: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {count:state.count+1}

    case DECREMENT:
      return {count:state.count-1}

    case DELAY:
      return {count:state.count+1}

    case PAR:
      if(state.count%2!==0){
        return {count:state.count+1}
      }
      else return state;

    case DOUBLE:
      return {count:state.count+2}

    case NDOUBLE:
    return {count:state.count-2}

    case X:
    return {count:state.count*2}

    default:
      return state;
  }
};
