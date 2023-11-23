import React from 'react';
import { Box, Container, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import heroJPG from '../../assets/monedasHierba.jpg'
import SearchBar from '../common/SearchBar';

function LandingPage() {
  return (
    <Container sx={{position: 'absolute', top: 4,}} >
      
      <Box  sx={{
         width: '100%',
         height: 'fitContent',
         position: 'relative',        
             
      

         
            }} >

        <Box sx={{position:'relative', maxWidth:'120%', width:'109%',right:16 }}>
        <Box
  sx={{
    width: '100%',
    height: '488px',
    position: 'absolute',
   
    top:57,
  
    backgroundImage: `url(${heroJPG})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }}
>
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
<SearchBar/>
          
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
