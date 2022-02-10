import React from "react";
import { MedicinesContextProvider } from "../../../Context/MedicinesContexProvider";
import { MedicinesCards } from "./MedicinesCards";

export const Medicines = () => {
    return (
        <div >
            <MedicinesContextProvider>
                <MedicinesCards />
            </MedicinesContextProvider>
        </div>
    )
}



