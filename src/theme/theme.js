import { createTheme } from '@mui/material/styles';
/* Paleta de colores actualizada */
const theme = createTheme({
  palette: {
    primary: {
      main: '#171616',
      light: '#FDFDFD',
      dark: '#090909'
    },
    gray: {
      dark: '#6E6F70',
      medium: '#D2D2D2',
      light:'#EAEAEA',
    },
    blue: {
      main: '#093C59',
    },
    green: {
      dark: '#226516',
      medium: '#1D9129',
    },
    orange: {
      main: '#B86B11',
    },
    red: {
      main: '#BC1111',
    },
  },
  typography: {
    fontFamily:['Lato', 'cursive'].join(','),
    titulos: {
      fontSize: '1.75rem',
      fontWeight: 700,
      // ... otros estilos que quieras agregar
    },
    subtitulos: {
      fontSize: '1.25rem',
      fontWeight: 500,
      // ... otros estilos que quieras agregar
    },
    parrafos: {
      fontSize: '0.75rem',
      fontWeight: 300,
      // ... otros estilos que quieras agregar
    },
    parrafosColor: {
      fontSize: '0.75rem',
      fontWeight: 300,
      backgroundColor: '#C2C2C2'
      // ... otros estilos que quieras agregar
    },
  },
  shape: {
    borderRadius: 4,  // Valor por defecto
    borderRadiusSmall: 2,
    borderRadiusMedium: 8,
    borderRadiusLarge: 16,
  },
  zIndex:{
    header: 10
  }
  // Podes agregar más configuraciones del tema aca cuando necesites
});

export default theme;