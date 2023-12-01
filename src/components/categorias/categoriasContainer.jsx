import React, {useEffect} from 'react'
import CardCategorias from './cardCategorias'
import foto from '../../img/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../store/categoriesSlice';
import { Link } from 'react-router-dom'; 




export const CategoriasContainer = () => {

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);


  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  
  return (
    <div>
      {categories ? categories.map((item) => (
        <Link to={`/categorias/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
          <CardCategorias title={item.name} img={foto} />
        </Link>
      )) : <p>Cargando categorías...</p>}
    </div>
  )
}