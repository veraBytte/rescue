import React from 'react'
import CardCategorias from './cardCategorias'
import foto from '../../img/logo.png'

let info = [
    {
        title : 'Inversiones Éticas: Más que ganancias',
        img : foto,
    },
    {
        title : 'Inversiones Éticas: Más que ganancias',
        img : foto,
    },
    {
        title : 'Inversiones Éticas: Más que ganancias',
        img : foto,
    },
];



export const CategoriasContainer = () => {
  
  return (

    <div>
   
      {info.map((item, index) => (
        <CardCategorias key={index} title={item.title} img={item.img} />
      ))}
    </div>
  )
}