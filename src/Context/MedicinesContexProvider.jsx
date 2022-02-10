import { createContext, useState,useEffect } from "react";
import { Get } from "../Services/MedicinesService.service";


export const MedicinesContext = createContext();

export const MedicinesContextProvider = ({children}) => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        Get()
        .then(res =>setMedicines(res.listOfMedicine))
        .catch(()=> console.log());
    }, []);

    return (
        <MedicinesContext.Provider value={{medicines}}>
           {children}
        </MedicinesContext.Provider>

    )
}