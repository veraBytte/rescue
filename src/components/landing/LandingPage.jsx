import React from 'react';
import { Box, Container, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import heroJPG from '../../assets/monedasHierba.jpg'

function LandingPage() {


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
                position: 'absolute',
                top: 80,
                left: 16,
                padding: '0px 16px',
                zIndex: 1,

                '& .MuiOutlinedInput-root': {
                  borderRadius: '100px',
                  backgroundColor: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white' // Aquí cambias el color del borde
                  }
                },
                '& .MuiInputBase-input::placeholder': {
                  typography: 'label',
                  color:'black',
                  opacity: 1
                

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

        <Box sx={{ width: '327px', height: 'Hug', position: 'relative', top: "587px", left: '16px', borderTop: 1 , borderBottom: 1,  padding: '8px 0px 16px 0px', borderColor:'rgba(34, 101, 22, 1)' ,gap: '8px' }}>


       <Typography sx={{typography: 'objetivos', mb:-3, height:'48px', width:'242px', textAlign: 'center', position:'relative', left:35}}> Objetivos de Ubuntu </Typography>
  
       <Box component="ul" sx={{ typography: 'parrafosObjetivos', width: '328px', height: '240px', paddingLeft: 0  }}>
  <Box component="li" sx={{mb:2}}>Facilitar a productores o <br/> microemprendedores el acceso a microcréditos que les permitan desarrollar sus iniciativas empresariales.</Box>
  <Box component="li" sx={{mb:2}}>Proporcionar financiación a empresas y organizaciones que ejecutan proyectos con objetivos sociales, ambientales y culturales.</Box>
  <Box component="li" sx={{}}>Ofrecer a potenciales inversores la oportunidad de participar en proyectos con impacto significativo.</Box>
</Box>
     
   
       


       
        </Box>

        
      </Box>
    </Container>
  );
}

export default LandingPage;
