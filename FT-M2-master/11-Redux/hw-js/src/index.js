const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento,asincrono, impar,double,ndouble,x } = require('./actions');


var store = createStore(contador);// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer


var valor = document.getElementById(`valor`);// Obtenemos el elemento con el id `valor`.
                                            // Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
                                            // En el primer render y cada vez que nos subscribamos al Store.
                                            // Utilizamos el elemento obtenido arriba para mostrar el State.


function renderContador() {
  var num=store.getState().contador;// Obtenemos la propiedad 'contador' de nuestro store:
  
  valor.innerHTML=num;// Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
};

renderContador();// Ejecutamos la funcion 'renderContador':


store.subscribe(()=>{renderContador() }) ;
// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:



// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

var btnincrement= document.getElementById("incremento");
btnincrement.onclick=()=>store.dispatch(incremento());

var btndecrement=document.getElementById("decremento");
btndecrement.onclick=()=>store.dispatch(decremento());

var btnimpar=document.getElementById("incrementoImpar");
btnimpar.onclick=()=>store.dispatch(impar());

var btnasincrono=document.getElementById("incrementoAsync");
btnasincrono.onclick=()=> setTimeout(() =>store.dispatch(asincrono()),1000);

var btnincrement= document.getElementById("double");
btnincrement.onclick=()=>store.dispatch(double());

var btnincrement= document.getElementById("ndouble");
btnincrement.onclick=()=>store.dispatch(ndouble());

var btnincrement= document.getElementById("x");
btnincrement.onclick=()=>store.dispatch(x());
