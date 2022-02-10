import { OpticCards } from "./OpticsCards";
import { OpticsContextProvider } from "../../../Context/OpticsContext";


export const Optics = () => {
    return (
        <OpticsContextProvider >
            <OpticCards/>
        </OpticsContextProvider>
    )
}