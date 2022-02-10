import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function OpticCard({opticItem}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={opticItem.ProductImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {opticItem.CompanyName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {opticItem.ProductDescription}
          <p>{opticItem.price}</p>
          <p>{opticItem.Quentity}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
// export const OpticCard = ({opticItem})=>{
//     return(
//         <section>
//             {/* <p>{opticItem.CompanyName}</p> */}
//             {/* <p>{opticItem.ProductName}</p> */}
//             {/* <p>{opticItem.price}</p> */}
//             {/* <p>{opticItem.ProductDescription}</p> */}
//             {/* <img src={opticItem.ProductImg}/> */}
//             {/* <p>{opticItem.Quentity}</p> */}
//         </section>
//     )
// }