export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const PAR= 'PAR';
export const DELAY= 'DELAY';
export const DOUBLE= 'DOUBLE';
export const NDOUBLE= 'NDOUBLE';
export const X= 'X';

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

export const increment = () => {
  return{type:INCREMENT}
  // Completa la funcion
};

export const decrement = () => {
  return{type:DECREMENT}
  // Completa la funcion
};
    
export const par = () => {
  return{type:PAR}
    // Completa la funcion
  };
export const delay = () => {
  return{type:DELAY}
    // Completa la funcion
  };
export const double = () => {
  return{type:DOUBLE}
    // Completa la funcion
    };
export const ndouble = () => {
  return{type:NDOUBLE}
  // Completa la funcion
  };
  export const x = () => {
    return{type:X}
    // Completa la funcion
    };