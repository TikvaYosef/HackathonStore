import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthProvider';


export default function RequiredAuth({children}) {
    const auth = useAuth();
    const location = useLocation()

    if(!auth.user){
      return  <Navigate to="/Login"  state={{path: location.pathname}}/>
    }

  return children;
}
