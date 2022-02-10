import { createContext, useState,useEffect } from "react";
import { Get, GetById } from "../Services/HouseCareService.service";


export const HouseCareContext = createContext();

export const HouseCareContextProvider = ({children}) => {
    const [HouseCare, setHouseCare] = useState([]);

    useEffect(() => {
        Get()
        .then(res =>setHouseCare(res.listOfHouseCare))
        .catch(()=> console.log());
    }, []);

    useEffect(() => {
        GetById(1)
        .then(res =>setHouseCare(res.listOfHouseCare))
        .catch(()=> console.log());
    }, []);

    return (
        <HouseCareContext.Provider value={{HouseCare}}>
           {children}
        </HouseCareContext.Provider>

    )
}