import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';


const CustomCard = ({ name, date, views }) => {

    const theme = useTheme();

  return (
    <Card sx={{ borderRadius: 4, border: `1px solid ${theme.typography.card.color}`,mb:2}}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography gutterBottom sx={{fontSize:16, fontWeight:600}}>
              {name}
            </Typography>
            <Typography color="textSecondary" sx={{fontSize:14, fontWeight:600}}>
              {date}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: '4px', color: theme.typography.card.color, fontWeight:600 }}>
            {views}
            <VisibilityIcon/>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;