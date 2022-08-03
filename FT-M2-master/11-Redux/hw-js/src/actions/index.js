const { INCREMENTO, DECREMENTO, ASINCRONO,IMPAR,DOUBLE, NDOUBLE,X } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento =()=> {
 return{type:INCREMENTO}
};

const decremento  =()=>{
  return{type:DECREMENTO}
};

const asincrono  =()=>{
  return{type:ASINCRONO}
};

const impar  =()=>{
  return{type:IMPAR}
};
const double  =()=>{
  return{type:DOUBLE}
};
const ndouble  =()=>{
  return{type:NDOUBLE}
};

const x  =()=>{
  return{type:X}
};


module.exports = {
  incremento,
  decremento,
  asincrono,
  impar,
  double,
  ndouble,
  x
}