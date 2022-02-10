import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "../../Pages/Optics/Optics.css";
import {GetById} from '../../../Services/OpticService.service';

export default function OpticCard({ opticItem }) {
    return (
        <Card className='opticCard' sx={{ maxWidth: 325, minWidth: 300 }}>
            <CardActionArea className='opticContent'>
                <div className='opticPic'>
                    <CardMedia
                        component="img"
                        height="150"
                        width="150"
                        image={opticItem.ProductImg}
                        alt="green iguana"
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {opticItem.CompanyName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {opticItem.ProductDescription}
                        {/* {opticItem.price} */}
                        {/* {opticItem.Quentity} */}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => GetById(opticItem.OpticsId)}>
                    Delete
                </Button>
                <Button size="small" color="primary" onClick={() => console.log("success")}>
                    Add
                </Button>
                <Button size="small" color="primary" onClick={() => console.log("success")}>
                    Edit
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