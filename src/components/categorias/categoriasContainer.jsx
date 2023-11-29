import React, {useEffect} from 'react'
import CardCategorias from './cardCategorias'
import foto from '../../img/logo.png'
import { useDispatch } from 'react-redux';
import { getCategories } from '../../../store/categoriesSlice';


let info = [
    {
      id: 1,  
      name : 'Inversiones Éticas: Más que ganancias',
        img : foto,
    },
    {
      id: 2,  
      name : 'Inversiones Éticas: Más que ganancias',
        img : foto,
    },
    {
      id: 3,  
      name : 'Inversiones Éticas: Más que ganancias',
        img : foto,
    },
];



export const CategoriasContainer = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  
  return (

    <div>
   
      {info.map((item) => (
        <CardCategorias key={item.id} title={item.name} img={item.img} />
      ))}
    </div>
  )
}