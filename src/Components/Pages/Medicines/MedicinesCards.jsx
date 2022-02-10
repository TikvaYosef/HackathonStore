import React, { useContext } from "react";
import { MedicinesContext } from "../../../Context/MedicinesContexProvider";
import { MedicinesCard } from "../../Features/MedicinesCard/MedicinesCard";


export const MedicinesCards = () => {
    const { medicines } = useContext(MedicinesContext);

    return (
        <div className="medicineCardsContainer main">
            {
                medicines.map((item) =>
                    <MedicinesCard MedicineCareItem={item} key={item.MedicineId} />
                )
            }
        </div>
    )
}