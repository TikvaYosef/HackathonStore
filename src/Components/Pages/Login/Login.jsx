import React, { useState } from 'react';
import { useAuth } from '../../../Context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Login() {
    const [user, setUser] = useState("")
    const auth = useAuth();
    const navigateToHome = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.path || '/Login';

    function handleLogin() {
        auth.login(user);
        navigateToHome('/', { replace: true })
        navigateToHome(redirectPath, { replace: true })
        navigateToHome(redirectPath)
    }

    return (
        <div>
            <h1>This Is Login Page</h1>

            <label htmlFor="">userName</label>
            <input type="text" onChange={(e) => { setUser(e.target.value) }} /> <br />

            <label htmlFor="">Password</label>
            <input type="password" onChange={(e) => { setUser(e.target.value) }} /> <br />

            <Stack spacing={2} direction="row">
                <Button variant="text" onClick={handleLogin}>Login</Button>
            </Stack>
        </div>
    )
}
