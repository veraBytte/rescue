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
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '24px',
      fontFamily:'lato',
      color: 'white',
      
           
      // ... otros estilos que quieras agregar
    },

    objetivos: {
      fontSize: '22px',
      fontWeight: 700,
      lineHeight: '25px',
      fontFamily:'lato',
      textAlign:'center',
      color: 'rgba(9, 60, 89, 1)',
  
      
           
      // ... otros estilos que quieras agregar
    },

    boton:{
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '20px',
      fontFamily:'lato',
      textAlign:'center',
      color: 'white',

    },
<<<<<<< HEAD

=======
>>>>>>> 9084087b60a5bf0365aa9f35eeee311357ad2291
    categorias: {
      textAlign: 'center',
      fontFamily: 'Lato',
      fontSize: '1.375rem',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '1.5625rem',
      color: 'black',             
      
    },
    subCategorias:{
      textAlign: 'center',
fontFamily: 'Lato',
fontSize: '1rem',
fontStyle: 'normal',
fontWeight: 600,
lineHeight: '1.5625rem', 
      color: 'black', 
    },

    label:{
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      fontFamily:'lato',
      color: '#090909',
      
    
    },
        card:{
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '25px',
      fontFamily:'lato',
      color: 'rgba(9, 60, 89, 1)',
      
    
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
    parrafosObjetivos: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '20px',
      fontFamily:'lato',
      color: 'rgba(9, 9, 9, 1)',
    }
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