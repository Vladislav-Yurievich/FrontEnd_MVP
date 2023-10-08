import React from 'react';
import { fetchToken } from '../utils/Storage';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {

    const auth = fetchToken();

    return (
        auth ? <Outlet /> : <Navigate to='/' />
    );
};

export default PrivateRoute;