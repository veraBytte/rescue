import React, {useState} from 'react'
import Cards from './Cards'
import '../../styles/Publicaciones.css'
export default function Publicaciones() {
  const [publicacion, setPublicacion] = useState([
    {
      title : 'Inversiones Éticas: Más que ganancias',
      img : 'img/cardImg.jpg',
      date: '17/04/2023',
      description : 'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.',
    },
    {
      title : 'Inversiones Éticas: Más que ganancias',
      img : 'img/cardImg.jpg',
      date: '17/04/2023',
      description : 'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.',
    },
    {
      title : 'Inversiones Éticas: Más que ganancias',
      img : 'img/cardImg.jpg',
      date: '17/04/2023',
      description : 'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.',
    },
  ])
  
  return (
    <div className='cardContainer'>
      {publicacion.map((publi, index) => {
        return <Cards key={index} title={publi.title} img={publi.img} date={publi.date} description={publi.description}/>
          
      })}
    </div>
      
  )
}
