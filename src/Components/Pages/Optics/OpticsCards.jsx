import React, { useContext } from "react";
import { opticsContext } from '../../../Context/OpticsContext';
import OpticCard from '../../Features/OpticCard/OpticCard';


export const OpticCards = () => {
    const { optics } = useContext(opticsContext);
    console.log(optics);

    return (
        <section className="">
            {optics.map((item) => <OpticCard opticItem={item} key={item.OpticsId} />)}
        </section>
    )
}
