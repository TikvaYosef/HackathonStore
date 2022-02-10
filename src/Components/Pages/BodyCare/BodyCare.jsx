import React from "react";
import {BodyCareContextProvider} from "../../../Context/BodyCareContextProvider";
import { BodyCareCards } from "./BodyCareCards";

export const BodyCare = () => {
    return (
        <div>
            <BodyCareContextProvider>

                <BodyCareCards/>

            </BodyCareContextProvider>

        </div>
    )
}