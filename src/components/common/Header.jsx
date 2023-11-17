import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CustomDrawer from './CustomDrawer'; // Importa el nuevo componente de Drawer

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMenuIcon, setIsMenuIcon] = useState(true); // Estado para controlar el icono
  const userType = 'adminUser'; //  establecer 'normalUser' o 'adminUser' según corresponda

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setIsMenuIcon(isDrawerOpen); // Cambia el icono al abrir/cerrar el Drawer
  };

  return (
    <div>
      <AppBar position="static" sx={(theme) => ({ bgcolor: theme.palette.primary.light})}>
        <Toolbar sx={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
          <IconButton edge="start" color="black" aria-label="menu" sx={{ justifySelf: 'start' }} onClick={toggleDrawer}>
            {isMenuIcon ? <MenuIcon /> : <CloseIcon />} {/* Renderiza el icono correspondiente */}
          </IconButton>
          <div style={{ textAlign: 'center' }}>
            <a href="https://imgur.com/dQ4iUZf">
              <img src="https://i.imgur.com/dQ4iUZf.jpg" alt="Logo" width="120px" height="56px" />
            </a>
          </div>
          {/* Muestra la imagen del administrador si el usuario es de tipo 'adminUser' */}
          <div style={{ justifySelf: 'end' }}>
            {userType === 'adminUser' && (
              <a href="https://imgur.com/Uez0fMl">
                <img src="https://i.imgur.com/Uez0fMl.jpg" alt="Admin Image" width="50px" height="50px" />
              </a>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <CustomDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} userType={userType}/> {/* Renderiza el nuevo componente de Drawer */}
    </div>
  );
}

export default Navbar;
