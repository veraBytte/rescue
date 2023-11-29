import React, {useEffect} from 'react'
import CardCategorias from './cardCategorias'
import foto from '../../img/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../store/categoriesSlice';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';




export const CategoriasContainer = () => {

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  console.log(categories)

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  
  return (
    <div>
      {categories ? categories.map((item) => (
        <CardCategorias key={item.id} title={item.name} img={foto} />
      )) : <p>Cargando categorías...</p>}
      <Button sx={{
          display: 'flex',
          width: '11.5rem',
          height: '2.5rem',
          padding: '0.625rem 1.5rem',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.625rem',
          flexShrink: 0,
          borderRadius: '6.25rem',
          background: 'var(--Azul, #093C59)',
          position: 'relative',
          left: '4.5rem',
          top:'1.5rem',
          fontSize: '12px',
          fontWeight: 700,
          lineHeight: '20px',
          fontFamily:'lato',
          textAlign:'center',
          color: 'white',

      }} >Ver más categorías</Button>
    </div>
  )
}