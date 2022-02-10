import React, { useContext } from "react";
import { opticsContext } from '../../../Context/OpticsContext';
import OpticCard from '../../Features/OpticCard/OpticCard';
import "./Optics.css";


export const OpticCards = () => {
    const { optics } = useContext(opticsContext);
    console.log(optics);

    return (
        <section className="OpticCardsContainer main">
            {optics.map((item) => <OpticCard opticItem={item} key={item.OpticsId} />)}
        </section>
    )
}
