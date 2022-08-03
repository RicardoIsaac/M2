import React from 'react';
import s from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (<div className={`${s.contenedor} `}>
<input type="text" />
<button onClick={() =>props.onSearch("...buscando")}>agregar</button>

  </div>)
};