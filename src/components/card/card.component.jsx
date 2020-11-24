import React from 'react';


import './card.styles.css'

export const Card = (props) => (
  <div className='card-container'>
    <img src={props.photo.src} alt={props.photo.name} />
    <h1>{props.photo.name}</h1>
  </div>
)