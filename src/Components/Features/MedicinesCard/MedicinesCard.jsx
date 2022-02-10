import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "../../Pages/Medicines/Medicines.css";

export function MedicinesCard({ MedicineCareItem }) {
    const {CompanyName,ProductName,price,ProductDescription,ProductImg,Quentity} = MedicineCareItem;
    return (
        <Card className='medicineCard' sx={{ maxWidth: 325, minWidth: 300 }}>
            <CardActionArea className='medicineContent'>
                <div className='opticPic'>
                    <CardMedia
                        component="img"
                        height="150"
                        width="150"
                        image={ProductImg}
                        alt="green iguana"
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {CompanyName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {ProductDescription}
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

// export const MedicinesCard = ({ MedicineCareItem }) => {
//     const {CompanyName,ProductName,price,ProductDescription,ProductImg,Quentity} = MedicineCareItem;

//     return (
//         <div>
//             {/* <p>{CompanyName}</p> */}
//             {/* <p>{ProductName}</p> */}
//             {/* <p>{price}</p> */}
//             {/* <p>{ProductDescription}</p> */}
//             {/* <img src={ProductImg} /> */}
//             <p>{Quentity}</p>

//         </div>
//     )
// }