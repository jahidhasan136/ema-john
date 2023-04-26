import React, { useContext } from 'react';
import { AuthContext } from '../components/Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext)
    
    const location = useLocation()
    if (loader) {
        return <div>loader....</div>
    }
    else if (user) {
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;