import React, { useContext } from "react";
import { MedicinesContext } from "../../../Context/MedicinesContexProvider";
import { MedicinesCard } from "../../Features/MedicinesCard/MedicinesCard";


export const MedicinesCards = () => {
    const { Medicines } = useContext(MedicinesContext);

    return (
        <div>
            {
                Medicines.map((item) =>
                    <MedicinesCard MedicineCareItem={item} />
                )
            }
        </div>
    )
}