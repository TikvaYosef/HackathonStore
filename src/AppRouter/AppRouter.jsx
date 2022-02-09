import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BodyCare } from "../Components/BodyCare/BodyCare";
import { Home } from "../Components/Home/Home";
import { HouseCare } from "../Components/HouseCare/HouseCare";
import { Links } from "../Components/Links/Links";
import { Manager } from "../Components/Manager/Manager";
import { Medicines } from "../Components/Medicines/Medicines";


export const AppRouter = () => {
    return (
        <BrowserRouter>
           
                <Links />
          
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route  path="/BodyCare" element={<BodyCare />} />
                <Route  path="/HouseCare" element={<HouseCare />} />
                <Route  path="/Manager" element={<Manager />} />
                <Route  path="/Medicines" element={<Medicines />} />
            </Routes>
        </BrowserRouter>
    )
}