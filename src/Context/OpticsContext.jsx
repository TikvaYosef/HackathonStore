import { CreateContext,useState } from "react";



export const opticsContext = CreateContext();


export const opticsContextProvider = ({children}) => {
    const [optics, setOptics] = useState([]);

    useEffect(() => {
        Get().then(data =>setOptics(data.listOfOptics)).catch();
    }, []);

    return (
        <opticsContext.Provider value={{optics}}>
           {children}
        </opticsContext.Provider>

    )
}