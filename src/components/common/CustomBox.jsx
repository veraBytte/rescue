import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CustomBox = ({ title, value }) => {
  return (
    <Box
      sx={{
        mb: 3,
        p: 1,
        border: '1px dashed grey',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        width: 152
      }}
    >
      <Typography gutterBottom sx={{ color: 'primary.main', fontSize: 18, fontWeight: 500, textAlign: 'left' }}>
        {title}
      </Typography>
      <Typography gutterBottom sx={{ color: 'primary.main', fontSize: 18, fontWeight: 500, textAlign: 'center' }}>
        {value}
      </Typography>
    </Box>
  );
};

export default CustomBox;