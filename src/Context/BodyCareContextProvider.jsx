import { createContext, useState,useEffect } from "react";
import { Get } from "../Services/BodyCareService.service";


export const BodyCareContext = createContext();

export const BodyCareContextProvider = ({children}) => {
    const [BodyCare, setBodyCare] = useState([]);

    useEffect(() => {
        Get()
        .then(res =>setBodyCare(res.listOfBodyCare))
        .catch(()=> console.log());
    }, []);

    return (
        <BodyCareContext.Provider value={{BodyCare}}>
           {children}
        </BodyCareContext.Provider>

    )
}