import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CustomBox from '../common/CustomBox';
import CustomCard from '../common/CustomCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const categories = [
  { name: "Economía social/ Desarrollo local / Inclusión financiera", count: 1 },
  { name: "Agroecología/ Orgánicos/ Alimentación saludable", count: 2 },
  { name: "Conservación/ Regeneración/Servicios ecosistémicos", count: 3 },
  { name: "Empresas/ Organismos de impacto/ Economía circular", count: 4 },
];

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography gutterBottom sx={{ mb: 3, color: 'primary.main', fontSize: 28, fontWeight: 500, textAlign: 'center' }}>
          Dashboard Administrador
        </Typography>

        <Typography gutterBottom sx={{ mb: 3, color: 'primary.main', fontSize: 22, fontWeight: 500, textAlign: 'center' }}>
          Estadisticas mensuales
        </Typography>

        <Box component="section" sx={{ mb: 3, p: 1, border: '1px dashed grey', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography gutterBottom sx={{ maxWidth: 225, color: 'primary.main', fontSize: 22, fontWeight: 500, textAlign: 'left' }}>
            Nuevos Microemprendimientos
          </Typography>
          <Typography gutterBottom sx={{ color: 'primary.main', fontSize: 22, fontWeight: 500, textAlign: 'center' }}>
            100
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CustomBox title="Gestionados" value="80" />
          <CustomBox title="No gestionados" value="20" />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Microemprendimientos por categoría</Typography>
          <List sx={style} component="nav" aria-label="microemprendimientos por categoría">

            {categories.map((category, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <ListItemText primary={category.name} sx={{maxWidth: '85%'}}/>
                    <Typography variant="body1" sx={{ mr: 1}}>{category.count}</Typography>
                  </Box>
                </ListItem>
                {index !== categories.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Box>

        <Typography variant="h6" sx={{ mb: 3, textAlign:'center', fontWeight:500}}>Visualizaciones por Publicación</Typography>
        
        <CustomCard name="Inversiones Éticas: Más que ganacias" date="17/04/2023" views={50} />
        <CustomCard name="Inversiones Éticas: Más que ganacias" date="17/04/2023" views={50} />
        <CustomCard name="Inversiones Éticas: Más que ganacias" date="17/04/2023" views={50} />
        <CustomCard name="Inversiones Éticas: Más que ganacias" date="17/04/2023" views={50} />
        <CustomCard name="Inversiones Éticas: Más que ganacias" date="17/04/2023" views={50} />

      </Box>
    </Container>
  );
};

export default Dashboard;