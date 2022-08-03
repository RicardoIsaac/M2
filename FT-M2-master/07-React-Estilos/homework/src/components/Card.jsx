import React from 'react';
import s from './Card.module.css';

export default function Card({name, min, max,img,onClose}) {
  
  // acá va tu código
  return <div className={`${s.contenedor} `}>
    
    <h3>{name}</h3> 
   <div className={`${s.info} `}>
    <h5>Min: {Math.floor(min)}°</h5>
    <h6>Max: {Math.floor(max)}°</h6>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="no existe" />
    </div>
    <div className={`${s.info2} `}>
    <img src={` https://www.pngmart.com/files/20/Sun-PNG-Clipart.png`} alt="ya fue" />
    </div>
    <button className={`${s.btn} `} onClick={onClose}>X</button>
    </div>
};
