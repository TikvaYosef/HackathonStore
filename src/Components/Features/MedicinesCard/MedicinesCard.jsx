import React from "react";


export const MedicinesCard = ({ MedicineCareItem }) => {
    const {CompanyName,ProductName,price,ProductDescription,ProductImg,Quentity} = MedicineCareItem;

    return (
        <div>
            
            <h1>House Care</h1>
            <p>{CompanyName}</p>
            <p>{ProductName}</p>
            <p>{price}</p>
            <p>{ProductDescription}</p>
            <img src={ProductImg} />
            <p>{Quentity}</p>

        </div>
    )
}