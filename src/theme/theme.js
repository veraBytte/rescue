import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#171616',
    },
    secondary: {
      main: '#c2c2c2',
    },
    verdes: {
      dark: '#366C00',
      medium: '#70D20F',
      light: '#99FF33'
    },
    naranjas: {
      dark: '#DD7200',
      medium: '#F8952C',
      light: '#FDAD58'
    },
  },
  typography: {
    titulos: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '24px',
      fontFamily:'lato',
      color: 'white',
      
      
      
      // ... otros estilos que quieras agregar
    },
    subtitulos: {
      fontSize: '18px',
      fontWeight: 500,
      fontFamily:'lato'
      
      // .. otros estilos que quieras agregar
    },
    parrafos: {
      fontSize: '28px',
      fontWeight: 500,
      lineHeight: '33px',
      fontFamily:'lato',
      color: 'white',
      
      
      // ... otros estilos que quieras agregar
    },
    parrafosColor: {
      fontSize: '0.75rem',
      fontWeight: 300,
      backgroundColor: '#C2C2C2',
      fontFamily:'lato'
      // ... otros estilos que quieras agregar
    },
  },
  shape: {
    borderRadius: 4,  // Valor por defecto
    borderRadiusSmall: 2,
    borderRadiusMedium: 8,
    borderRadiusLarge: 16,
  },
  // Podes agregar más configuraciones del tema aca cuando necesites
});

export default theme;