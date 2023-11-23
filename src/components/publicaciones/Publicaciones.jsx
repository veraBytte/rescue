import React from 'react'

import '../../styles/Publicaciones.css'
import SearchBar from '../common/SearchBar'
import PublicacionesCommon from '../common/PublicacionesCommon'
export default function Publicaciones() {

  
  return (
    <div className='container'>
      <div className='encabezado'>
  
      <div className='searchBar'>
        <SearchBar/>
      </div>
      <div className='textoPublicaciones'>
        <h3>Publicaciones</h3>
        <h2>Explorando finanzas de impacto</h2>
        <p>Conocé cómo decisiones financieras pueden impactar positivamente en la sociedad y el medio ambiente</p>
      </div>


      </div>
      <div>

      <PublicacionesCommon/>   
      </div>
    </div>
      
  )
}
