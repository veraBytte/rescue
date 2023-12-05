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

        <Typography sx={{color: 'var(--Negro, #090909)',
fontFamily: 'Lato',
fontSize: '1.125rem',
fontStyle: 'normal',
fontWeight: 600,
lineHeight: '1.5625rem'}} >{props.nombre}</Typography>
        <Typography
        sx={{
          color: 'var(--Azul, #093C59)',
fontFamily: 'Lato',
fontSize: '0.875rem',
fontStyle: 'normal',
fontWeight: 700,
lineHeight: '1.125rem',
mt:1,
        }}
        >{props.subCategoria ? props.subCategoria : 'Subcategoria'}</Typography>
        <Typography sx={{fontFamily: 'Lato',
fontSize: 14,
fontWeight: 400,
letterSpacing: 0,
textAlign: 'left',
mt:1,
}}>{props.categoria}</Typography>
        </box>
        <Typography sx={{
fontFamily: 'Nunito',
fontSize: 14,
fontWeight: 400,
letterSpacing: 0,
textAlign: 'left',
display: 'flex',
alignItems: 'center',
mt:2



        }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.88 14.12 16.19 12 18.88C9.92 16.21 7 11.85 7 9Z" fill="#093C59"/>
<path d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z" fill="#093C59"/>
</svg>
{props.ubicacion ? props.ubicacion : 'Ubicación'}</Typography>
      </CardContent>
    </Card>
  )
}
