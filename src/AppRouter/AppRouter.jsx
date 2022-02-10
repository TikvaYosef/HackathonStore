import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BodyCare } from "../Components/Pages/BodyCare/BodyCare";
import { Home } from "../Components/Pages/Home/Home";
import { HouseCare } from "../Components/Pages/HouseCare/HouseCare";
import { Links } from "../Components/Features/Links/Links";
import { Admin, Manager } from "../Components/Pages/Admin/Admin";
import { Medicines } from "../Components/Pages/Medicines/Medicines";
import { Optics } from "../Components/Pages/Optics/Optics";
import Header from "../Components/Features/Header/Header";



export const AppRouter = () => {
    return (
        <BrowserRouter>
           <Header/>
                <Links />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route  path="/BodyCare" element={<BodyCare />} />
                <Route  path="/HouseCare" element={<HouseCare />} />
                <Route  path="/Admin" element={<Admin />} />
                <Route  path="/Medicines" element={<Medicines />} />
                <Route  path="/Optics" element={<Optics />} />
            </Routes>
        </BrowserRouter>
    )
}