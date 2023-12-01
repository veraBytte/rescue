import React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar () {

    return (
<Box >
<TextField
  id="outlined-basic"
  label=""
  placeholder="Buscar Microemprendimientos"
  variant="outlined"
  sx={{
    display:'flex',
    width: '100%',
    height: 56,
    position: 'relative',
    top: 80,
    
    
    padding: '0px 16px',
    zIndex: 1,
    flexShrink: 0,

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

    )
}

export default SearchBar;