import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import theme from '../../theme/theme';
import { Link } from 'react-router-dom';

function CustomDrawer({ isDrawerOpen, toggleDrawer, userType }) {

    const userOptions = {
        normalUser: (
          <>
            <ListItem button component={Link} to="/" onClick={toggleDrawer}>
              <ListItemText primary="Inicio" sx={{ color: theme.palette.primary.light }} />
            </ListItem>
            <ListItem button component={Link} to="/categorias" onClick={toggleDrawer}>
              <ListItemText primary="Microemprendimientos" sx={{ color: theme.palette.primary.light }} />
            </ListItem>
            <ListItem button component={Link} to="/publicaciones" onClick={toggleDrawer}>
              <ListItemText primary="Publicaciones" sx={{ color: theme.palette.primary.light }} />
            </ListItem>
          </>
        ),
        adminUser: (
          <>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Administrador" sx={{ color: theme.palette.primary.light }} />
            </ListItem>
            <ListItem button component={Link} to="/dashboard" onClick={toggleDrawer}>
              <ListItemText primary="Dashboard Administrador" sx={{ color: theme.palette.primary.light }} />
            </ListItem>
            <ListItem button component={Link} to="/emprendimientos" onClick={toggleDrawer}>
              <ListItemText primary="Microemprendimientos" sx={{ color: theme.palette.primary.light }} />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Solicitudes de Contacto" sx={{ color: theme.palette.primary.light }} />
            </ListItem>
            <ListItem button component={Link} to="/publicaciones" onClick={toggleDrawer}>
              <ListItemText primary="Publicaciones" sx={{ color: theme.palette.primary.light }} />
            </ListItem>
          </>
        ),
      };
    
      const renderOptions = userOptions[userType]; // Obtiene las opciones según el tipo de usuario
    

    return (
        <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
            BackdropProps: {
            invisible: true, // Evita que el fondo oscuro se aplique fuera del Drawer
            sx: { backgroundColor: 'transparent' } // Fondo transparente para el Drawer
            }
        }}
        sx={{
            '& .MuiDrawer-paper': {
            bgcolor: theme.palette.blue.main,
            marginTop: '62px', // Altura del AppBar
            }
        }}
        >
        {/* Contenido del Drawer */}
        <List>
            {renderOptions} {/* Renderiza las opciones correspondientes al tipo de usuario */}
        </List>
        </Drawer>
    );
}

export default CustomDrawer;
