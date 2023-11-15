import React from 'react'
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

export default function Cards(props){
  
    return (
      <Card 
      sx={(theme) =>({
        width:340 , 
        bgcolor:'gray.light', 
        p: '16px 16px 8px 16px',
        m: '20px',
        borderRadius:'16px'
      })}>
      <CardActionArea>
        <Typography 
          gutterBottom 
          variant="h4" 
          component="div" 
          fontSize={18} 
          fontWeight={700} 
          textAlign={'center'}>
            {props.title}
        </Typography>
        <CardMedia
          sx={{
            borderRadius:'16px',
            mb:3
          }}
          component="img"
          height="140"
          image={props.img}
          alt=""
          />
        <CardContent sx={{p:0}}>
          <Typography variant="body1" color="primary.dark" fontWeight={600}>
            {props.date}
          </Typography>
          <Typography variant="body1" color="primary.dark" fontWeight={400}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions 
      sx={{justifyContent:'center'}}>
        <Button size="small" sx={(theme) =>({
          color: 'blue.main',
          fontWeight: '600',
          fontSize: '16px',
          textTransform:'none'
        })}>
        Ver más
        </Button>
      </CardActions>
    </Card>
    );
}