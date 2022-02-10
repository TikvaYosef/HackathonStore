import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../../Pages/BodyCare/BodyCare.css';

export function BodyCareCard({ BodyCareItem }) {
    return (
        <Card className='bodyCareCard' sx={{ maxWidth: 325, minWidth: 300 }}>
            <CardActionArea className='bodyCareContent'>
                <div className='bodyCarePic'>
                    <CardMedia
                        component="img"
                        height="150"
                        width="150"
                        image={BodyCareItem.ProductImg} 
                        alt="green iguana"
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {BodyCareItem.CompanyName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {BodyCareItem.ProductDescription}
                        {/* {opticItem.price} */}
                        {/* {opticItem.Quentity} */}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
        </Card>
    );
}

// export const BodyCareCard = ({ BodyCareItem }) => {
//     return (
//         <div>
          
//             {/* <p>{BodyCareItem.CompanyName}</p> */}
//             <p>{BodyCareItem.ProductName}</p>
//             <p>{BodyCareItem.price}</p>
//             {/* <p>{BodyCareItem.ProductDescription}</p> */}
//             {/* <img src={BodyCareItem.ProductImg} /> */}
//             <p>{BodyCareItem.Quentity}</p>

//         </div>
//     )
// }