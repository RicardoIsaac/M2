import React from 'react';

export default function SearchBar(props) {
  // acá va tu código     //se crea la searchbar con un textbox "input" y otro boton con su funcion on search
  return (<div>
<input type="text" />
<button onClick={() =>props.onSearch("...buscando")}>agregar</button>

  </div>)
};