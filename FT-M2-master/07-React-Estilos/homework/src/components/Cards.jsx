import React from 'react';
import Card from './Card.jsx';
import s from './Cards.module.css';
export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map

  return (<div  className={`${s.contenedor} `}> 

{
props.cities.map(citi => <Card
max={citi.main.temp_max}
min={citi.main.temp_min}
name={citi.name}
img={citi.weather[0].icon}
onClose={() => alert(citi.name)}
/>)}
     
  </div>)
};