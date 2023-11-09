import React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, Input, TextField } from '@mui/material';
import  heroJPG from '../../assets/monedasHierba.jpg'


function LandingPage() {
 
  return (
    <Container>
      <Box sx={{ my: 4,      
      }}>
      
      <Box sx={{ 
  my: 4,
  backgroundImage: `url(${heroJPG})`,
  backgroundRepeat:"no-repeat",
  width: window.innerWidth <= 768 ? '360px' : '100%',
  height: window.innerWidth <= 768 ? '488px' : 'auto',
  backgroundSize:'contain',
  backgroundPosition:'center',
  position: 'relative',

  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(9, 9, 9, 0.7)',
  },
}}>


          <box sx={{m:2}}>
          <TextField id="outlined-basic" label= "Outlined" variant='outlined'/>
          </box>

       <Box
       >
       
         <Typography sx={{ typography: 'titulos', position:'absolute', left:16, top: 176, mb:1, zIndex: 1 }} component="h2">FINANCIAMIENTO SOSTENIBLE</Typography>
       
        <box>
         <Typography sx={{typography: 'parrafos', width:'240px', height:264, top:208, left:16,  position:'absolute', zIndex: 1}}> Impulsamos el desarrollo de finanzas de impacto, liderando la transición hacia un modelo financiero sostenible</Typography>
        </box>
        </Box>
         
         
        </Box>

        {/* Tarjetas de Información */}
        <Grid container spacing={3}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} sm={4} key={item}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Imagen de muestra"
                  height="140"
                  image="https://bruchoufunes.com/wp-content/uploads/2021/07/bruchou-compromiso-sustentable.jpg"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Título {item}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Descripción detallada del contenido de esta tarjeta. Puede variar según el propósito de la tarjeta.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default LandingPage;