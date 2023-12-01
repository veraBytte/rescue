import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

export const CardMicroemprendimientos = (props) => {


  return (
    <Card sx={{
        display: 'flex',
        width: '22.5rem',
        padding: '1rem 0rem 0.5rem 0rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        borderRadius: '1rem',
        background: 'var(--Gris-claro, #EAEAEA)',
      }}>
      <CardMedia
        component="img"
        image={props.img}
        alt="Imagen"
        sx={{
          width:304,
          height:128,
          borderRadius:4,
        
        }}
      />
      <CardContent>
        <Typography>{props.nombre}</Typography>
        <Typography>{props.subCategoria}</Typography>
        <Typography>{props.categoria}</Typography>
        <Typography></Typography>
      </CardContent>
    </Card>
  )
}
