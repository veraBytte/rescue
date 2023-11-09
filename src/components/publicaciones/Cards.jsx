import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Cards(props){
    return (
      <Card sx={(theme) =>({width:340 , bgcolor:'gray', })}>
      <CardActionArea>
        <Typography 
          gutterBottom 
          variant="h4" 
          component="div" 
          fontSize={16} 
          fontWeight={700} 
          textAlign={'center'}>
            {props.title}
        </Typography>
        <CardMedia
          sx={{
            borderRadius:'16px',
            mb:2
          }}
          component="img"
          height="140"
          image={props.img}
          alt=""
        />
        <CardContent sx={{p:0}}>
          <Typography variant="body1" color="text.secondary">
            {props.date}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions 
      sx={{justifyContent:'center'}}>
        <Button size="small" color="primary">
        Ver más
        </Button>
      </CardActions>
    </Card>
    );
}