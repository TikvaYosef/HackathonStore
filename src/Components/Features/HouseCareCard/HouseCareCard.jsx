import React from "react";


export const HouseCareCard = ({ HouseCareItem }) => {
    return (
        <div>
            
            <h1>House Care</h1>
            <p>{HouseCareItem.CompanyName}</p>
            <p>{HouseCareItem.ProductName}</p>
            <p>{HouseCareItem.price}</p>
            <p>{HouseCareItem.ProductDescription}</p>
            <img src={HouseCareItem.ProductImg} />
            <p>{HouseCareItem.Quentity}</p>

        </div>
    )
}