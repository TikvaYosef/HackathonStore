import React, { useState, useEffect } from "react";
import { Get } from "../../../Services/BodyCareService.service";



export const Admin = () => {
    const [BodyCare, setBodyCare] = useState([]);



    useEffect(() => {
        Get()
            .then(res => setBodyCare(res.listOfBodyCare))
            .catch(() => console.log());
    }, []);



    return (
        <div className="main">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Company</th>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        BodyCare.map((item) =>
                                
                           <tr>
                                <td>{item.BodyCareId}</td>
                                <td>{item.CompanyName}</td>
                                <td>{item.ProductName}</td>
                                <td>{item.Price}</td>
                                <td>{item.ProductDescription} </td>
                                <td><img src={item.ProductImg} /></td>
                            </tr>
                           
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

