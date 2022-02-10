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

                        BodyCare.map(() =>

                            <tr>
                                <td>{BodyCare.BodyCareId}</td>
                                <td>{BodyCare.CompanyName}</td>
                                <td>{BodyCare.ProductName}</td>
                                <td>{BodyCare.Price}</td>
                                <td>{BodyCare.ProductDescription} </td>
                                {/* <td><img src={BodyCare.ProductImg} /></td> */}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

