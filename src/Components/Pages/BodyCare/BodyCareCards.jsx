import React, { useContext } from "react";
import {  BodyCareContext } from "../../../Context/BodyCareContextProvider";
import { BodyCareCard } from "../../Features/BodyCareCard/BodyCareCard";


export const BodyCareCards = () => {
    const { BodyCare } = useContext(BodyCareContext);

    return (
        <div>
            {
                BodyCare.map((item) =>
                    <BodyCareCard BodyCareItem={item} />
                )
            }
        </div>
    )
}