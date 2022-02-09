import React, { useContext } from "react";
import {opticsContext} from '../../../Context/OpticsContext';


export const Optics = () => {
    const { shoes,isLoading } = useContext(opticsContext);

    return (
        shoes.map((item) => 
    )
}