import { createContext, useState } from "react";

export const opticsContext = createContext();

export const OpticsContextProvider = ({children}) => {
    const [optics, setOptics] = useState([]);

    useEffect(() => {
        Get()
        .then(res =>setOptics(res.listOfOptics))
        .catch(()=> console.log());
    }, []);

    return (
        <opticsContext.Provider value={{optics, setOptics}}>
           {children}
        </opticsContext.Provider>

    )
}