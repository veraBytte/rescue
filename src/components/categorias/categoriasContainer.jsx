import React, {useEffect} from 'react'
import CardCategorias from './cardCategorias'
import foto from '../../img/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../store/categoriesSlice';





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
      
    </div>
  )
}