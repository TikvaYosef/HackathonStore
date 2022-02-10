import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BodyCare } from "../Components/Pages/BodyCare/BodyCare";
import { Home } from "../Components/Pages/Home/Home";
import { HouseCare } from "../Components/Pages/HouseCare/HouseCare";
import { Links } from "../Components/Features/Links/Links";
import {Admin} from '../Components/Pages/Admin/Admin'
import { Medicines } from "../Components/Pages/Medicines/Medicines";
import { Optics } from "../Components/Pages/Optics/Optics";
import Header from "../Components/Features/Header/Header";
import Profile from "../Components/Pages/Profile/Profile";
import NotFound from '../Components/Pages/NotFound/NotFound'
import Users from '../Components/Pages/Users/Users'
import RequiredAuth from "../Components/Features/RequiredAuth/RequiredAuth";
import Login from "../Components/Pages/Login/Login";
import { AuthProvider } from "../Context/AuthProvider";




export const AppRouter = () => {
    return (
        <AuthProvider>
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
                <Route path="/Profile" element={<RequiredAuth><Profile/></RequiredAuth>}/>
                <Route path="/Login" element={<Login/>}>
                     <Route path="/Login/:userId" element={<Users/>}/>
                     <Route path="/Login/Admin" element={<Admin/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
        </AuthProvider>
    )
}