import React from 'react';
import Card from './Card.jsx';
export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map  //se llama la informacion que ira dentro de la casa
  return (<div>

{props.cities.map(citi => <Card
max={citi.main.temp_max}
min={citi.main.temp_min}
name={citi.name}
img={citi.weather[0].icon}
onClose={() => alert(citi.name)} //se hace la funcion de alerta para la funcion 
/>)}
     
  </div>)
};