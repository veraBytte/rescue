import { Box, Typography } from '@mui/material';
import React from 'react';

const CardCategorias = (props) => {
    
  return (
    <Box sx={{
      width:328,
      height:64,
      borderRadius:5,
      backgroundColor: 'rgba(234, 234, 234, 1)',
    }}
>
    <Box    sx={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems:'center',
     
        mt:2,
        mb:2,
        
         
    }}>

    <img src={props.img} alt={props.title} style={{width: '40px', height: '40px', padding:2, position:'relative', top:'0.4rem',  border:' 1px solid rgba(34, 101, 22, 1)', borderRadius: '100%'}} />
     <Typography sx={{typography:'card', width:235, height:48, ml:'1rem',  
     '&::after': { // Añadido
            content: '""',
            display: 'block',
            width: '14.6875rem',
            height: '0.0625rem',
            backgroundColor: '#226516',
            marginTop: 1,
        }
    
    }}>{props.title}</Typography>
    </Box>

    </Box>
  ) 
}

export default CardCategorias;
