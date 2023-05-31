import React, { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({Children}) => {
    const {user} = useContext(authContext);

    if(loading){
        return <progress className='progress w-56'></progress>
    }

    if(user) {
        return Children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;