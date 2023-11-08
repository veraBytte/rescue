import React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, Input, TextField } from '@mui/material';
import  heroJPG from '../../assets/monedasHierba.jpg'

function LandingPage() {
 
  return (
    <Container>
      <Box sx={{ my: 4,      
      }}>
      
       <Box sx={{ my: 4,
      
      backgroundImage: `url(${heroJPG})`,
      backgroundRepeat:"no-repeat",
        width: window.innerWidth <= 768 ? '360px' : '100%',
        height: window.innerWidth <= 768 ? '488px' : 'auto',
        backgroundsize:'contain',
        backgroundPosition:'center',
      
      
       
      }}>
          <box sx={{m:2}}>
          <TextField id="outlined-basic" label= "Outlined" variant='outlined'/>
          </box>

       <Box
       sx={
        {
          my: 3,
        }
       }
       >
         <box sx={{width:'328px', height:'24px'}}>
         <Typography sx={{ typography: 'titulos' }} component="h2">FINANCIAMIENTO SOSTENIBLE</Typography>
        </box>
         <box sx={{width:'240px', height:'264px'}}>
         <Typography sx={{typography: 'parrafos', my:2, width:'50%'}}> Impulsamos el desarrollo de finanzas de impacto, liderando la transición hacia un modelo financiero sostenible</Typography>
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