import React, { useContext } from "react";
import { HouseCareContext } from "../../../Context/HouseCareContextProvider";
import { HouseCareCard } from "../../Features/HouseCareCard/HouseCareCard";


export const HouseCareCards = () => {
    const { HouseCare } = useContext(HouseCareContext);

    return (
        <div>
            {
                HouseCare.map((item) =>
                    <HouseCareCard HouseCareItem={item} />
                )
            }
        </div>
    )
}