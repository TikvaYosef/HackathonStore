import React from "react";
import {Link} from "react-router-dom";
import '../Links/Links.css';
import { useAuth } from "../../../Context/AuthProvider";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';




export const Links = () => {
    const auth = useAuth();
    return (
        <nav className="sideBar">
            
            <Link to="/">Home</Link>
            <Link to="/BodyCare">BodyCare</Link>
            <Link to="/HouseCare">HouseCare</Link>
            <Link to="/Admin">Admin</Link>
            <Link to="/Medicines">Medicines</Link>
            <Link to="/Optics">Optics</Link>
            <Link to="/Profile">Profile</Link>
          {
            !auth.user && (<Link to="/Login">Login</Link>)
          }
            
        </nav>
    )
}