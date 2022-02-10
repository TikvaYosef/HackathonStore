import React from "react";


export const BodyCareCard = ({ BodyCareItem }) => {
    return (
        <div>
            <h1>Body Care</h1>
            <p>{BodyCareItem.CompanyName}</p>
            <p>{BodyCareItem.ProductName}</p>
            <p>{BodyCareItem.price}</p>
            <p>{BodyCareItem.ProductDescription}</p>
            <img src={BodyCareItem.ProductImg} />
            <p>{BodyCareItem.Quentity}</p>

        </div>
    )
}