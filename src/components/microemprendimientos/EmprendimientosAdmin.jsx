import React, { useState, useCallback } from 'react';
import { Box, Container, Grid, Paper, Typography, Popover, List, ListItem, ListItemText, Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import { ArrowForwardIos as ArrowForwardIosIcon, MoreVert as MoreVertIcon, Check as CheckIcon } from '@mui/icons-material';

const styles = {
  box: { display: 'flex', justifyContent: 'space-between', width: '100%' },
  paper: { p: 3, display: 'flex', flexDirection: 'column', alignItems: 'start' },
};


const GridItem = ({ handleClick }) => (
  <Grid item xs={12} md={4}>
    <Paper elevation={3} sx={styles.paper}>
      <Box sx={styles.box}>
        <Typography sx={{ borderBottom: 1, borderColor: 'green.dark', fontWeight: 'bold', color: 'blue.main' }} variant="h6">Nombre Emprendimiento</Typography>
        <MoreVertIcon sx={{ fontSize: 32 }} onClick={handleClick} />
      </Box>
      <Box sx={{ ...styles.box, alignItems: 'center', mt: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Agroecología/Orgánicos/</Typography>
          <Typography variant="h6">Alimentación saludable</Typography>
        </Box>
        <ArrowForwardIosIcon sx={{ fontSize: 24 }} />
      </Box>
    </Paper>
  </Grid>
);

function EmprendimientosAdmin() {
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenModal = useCallback(() => {
    handleClose();
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3, color: 'primary.main' }}>
          Microemprendimientos
        </Typography>

        <Button variant="contained" color="blue" sx={{ width: '100%', borderRadius: '16px', mb: '48px', py: 1 }}>
          Cargar Emprendimiento
        </Button>

        <Grid container spacing={3}>
          <GridItem handleClick={handleClick} />
          <GridItem handleClick={handleClick} />
          <GridItem handleClick={handleClick} />
          <GridItem handleClick={handleClick} />
        </Grid>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <List>
            <ListItem button>
              <ListItemText primary="Editar" />
            </ListItem>
            <ListItem button onClick={handleOpenModal}>
              <ListItemText primary="Ocultar" />
            </ListItem>
          </List>
        </Popover>

        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogContent sx={{display:'flex',flexDirection: 'column', alignItems: 'center', gap: 2}}>
            <CheckIcon sx={{color: 'green.medium',border: 1,borderColor: 'green.medium', borderRadius: '50%'}}></CheckIcon>
            <Typography>Publicación ocultada con éxito</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal}>Aceptar</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}

export default EmprendimientosAdmin;