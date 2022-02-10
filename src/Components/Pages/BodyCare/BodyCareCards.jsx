import React, { useContext } from "react";
import {  BodyCareContext } from "../../../Context/BodyCareContextProvider";
import { BodyCareCard } from "../../Features/BodyCareCard/BodyCareCard";
import './BodyCare.css';


export const BodyCareCards = () => {
    const { BodyCare } = useContext(BodyCareContext);

    return (
        <div className="bodyCareCardsContainer main">
            {
                BodyCare.map((item) =>
                    <BodyCareCard BodyCareItem={item} />
                )
            }
        </div>
    )
}