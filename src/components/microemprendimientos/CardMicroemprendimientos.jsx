import { Box, Typography } from '@mui/material'

export const CardMicroemprendimientos = (props) => {
console.log(props)

  return (
    <Box sx={{
        display: 'flex',
        width: '20.5rem',
        padding: '1rem 0rem 0.5rem 0rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        borderRadius: '1rem',
        background: 'var(--Gris-claro, #EAEAEA)',
      }}>
        <img src={props.img} alt="Imagen" />
        <Typography>{props.nombre}</Typography>
        <Typography>{props.subCategoria}</Typography>
        <Typography>{props.categoria}</Typography>

        <Typography></Typography>

      </Box>
  )
}
