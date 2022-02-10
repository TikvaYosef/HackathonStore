import React from "react";
import { HouseCareContextProvider } from "../../../Context/HouseCareContextProvider";
import { HouseCareCards } from "./HouseCareCards";


export const HouseCare = () => {
    return (
        <div className="HouseCare main">
            <HouseCareContextProvider>
                <HouseCareCards />
                
            </HouseCareContextProvider>
        </div>
    )
}