import React from "react";
import {Link} from "react-router-dom";
// import '../Links/Links.css';
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
    return (
        <nav>
            <ul className="NavBar">
            <Link to="/"><li>Home</li></Link>
            <Link to="/BodyCare"><li>BodyCare</li></Link>
            <Link to="/HouseCare"><li>HouseCare</li></Link>
            <Link to="/Manager"><li>Manager</li></Link>
            <Link to="/Medicines"><li>Medicines</li></Link>
            <Link to="/Optics"><li>Optics</li></Link>
            </ul>
        </nav>
    )
}