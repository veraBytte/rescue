import React from 'react';
<<<<<<< HEAD
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, TextField } from '@mui/material';

import  heroJPG from '../../assets/monedasHierba.jpg'

function LandingPage() {
 
 
  return (
    <Container>
      <Box sx={{ my: 4 }}>
      
     
  <Box 
    sx={{ 
        width: '360px', 
        height: '488px', 
        position: 'absolute'
    }}
>
    <img   src={heroJPG} 
        alt="Descripción de la imagen" 
        sx={{ 
            position: 'absolute', 
            top: '57px',
            width: '360px', 
            height: '488px'
        }} 
    />
    <Box 
        sx={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
            position: 'absolute', 
            top: '0',
            width: '100%', 
            height: '100%'
        }}
    />
</Box>
          <Box >
          <TextField 
  sx={{
    width: 328,
    height: 56,
    position: 'fixed',
    top: 80,
    left: 16,
     padding: '0px 16px',
    ".MuiOutlinedInput-root": {
      borderRadius: '100px',
    }
  }} 
  id="outlined-basic" 
  label="Outlined" 
  variant='outlined'
/>

          </Box>

    
       
      <Typography sx={{ typography: 'titulos', position:'absolute', left: 16, top: 176}} component="h2">FINANCIAMIENTO SOSTENIBLE</Typography>
            

       
        <Box>
         <Typography sx={{typography: 'parrafos', width:'240px', height:264, top:208, left:16,  position:'absolute', }}> Impulsamos el desarrollo de finanzas de impacto, liderando la transición hacia un modelo financiero sostenible</Typography>
        </Box>
       
         
         
       
=======
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, TextField, InputAdornment  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/system';
import heroJPG from '../../assets/monedasHierba.jpg'

function LandingPage() {
  const theme = useTheme();

  return (
    <Container>
      <Box sx={{
        my: 4,

      }}>

        <Box>
          <Box
            sx={{
              width: '360px',
              height: '488px',
              position: 'absolute'
            }}
          >
            <img
              src={heroJPG}
              alt="Descripción de la imagen"
              sx={{
                position: 'absolute',
                top: '57px',
                width: '360px',
                height: '488px'
              }}
            />
            <Box
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                position: 'absolute',
                top: '0',
                width: '100%',
                height: '100%'
              }}
            />
          </Box>
          <Box >


          <TextField 
  id="outlined-basic" 
  label=""
  placeholder="Buscar Microemprendimientos" 
  variant="outlined"
  sx={{
    width: 328,
    height: 56,
    position: 'fixed', 
    top: 80,
    left: 16,
    padding: '0px 16px',
    zIndex:1,
    
    '& .MuiOutlinedInput-root': {
      borderRadius: '100px',
      backgroundColor: 'white',
    },
     '& .MuiInputBase-input::placeholder':{
      typography: 'label',
      
     }
  }}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
  }}

/>

          </Box>

          <Box
          >

            <Typography sx={{ typography: 'titulos', position: 'absolute', left: 16, top: 176, mb: 1 }} component="h2">FINANCIAMIENTO SOSTENIBLE</Typography>

            <Box>
              <Typography sx={{ typography: 'parrafos', width: '240px', height: 264, top: 208, left: 16, position: 'absolute' }}> Impulsamos el desarrollo de finanzas de impacto, liderando la transición hacia un modelo financiero sostenible</Typography>
            </Box>
          </Box>


        </Box>
>>>>>>> 0cc33303d6f995ae2e3e357adfe0e1ec7ac81ea6

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
