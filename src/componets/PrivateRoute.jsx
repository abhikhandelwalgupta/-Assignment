import React from 'react'
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const [cookies,] = useCookies(['users']);
    console.log(cookies.name);
    if (cookies.name === undefined) {
        return <Navigate to='/' />
    } else {
        return children
    }
}

export default PrivateRoute