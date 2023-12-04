import { Card, CardContent, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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
  <Carousel showThumbs={false} showStatus={false} showIndicators={true} showArrows={true} emulateTouch={true}>
  {Array.isArray(props.img) ? props.img.map((image, index) => (
    <div key={index}>
      <img src={image} alt="Imagen" style={{width: 304, height: 128}} />
    </div>
  )) : <img src={props.img} alt="Imagen" style={{width: 304, height: 128}} />}
</Carousel>

      <CardContent>
        <box>

        <Typography>{props.nombre}</Typography>
        <Typography>{props.subCategoria}</Typography>
        <Typography>{props.categoria}</Typography>
        </box>
        <Typography></Typography>
      </CardContent>
    </Card>
  )
}
