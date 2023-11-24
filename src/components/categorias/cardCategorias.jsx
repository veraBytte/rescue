import { Box } from '@mui/material';
import React from 'react';

const CardCategorias = (props) => {
    console.log(props)
  return (
    <Box>
    
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>

    </Box>
  ) 
}

export default CardCategorias;
