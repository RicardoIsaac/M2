import React from 'react';

export default function Card({name, min, max,img,onClose}) {    //se da la esctructura basica de la carta que se quiso crear
  // acá va tu código                                            //en button se crea la funicon on close cuando se le haga click
  return <div>
    <button onClick={onClose}>X</button>    
    <h3>{name}</h3>
    <h4>Min</h4>
    <h4>{min}</h4>
    <h4>Max</h4>
    <h4>{max}</h4>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="no hay compa" />
    </div>
};