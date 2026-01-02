import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loding from '../components/common/Loding';

const PrivateRoute = ({children}) => {
    const location =useLocation()
    const{user,loading}=use(AuthContext)
    if(loading){
        return <Loding></Loding>
    }
    if(user && user?.email){
    return children
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
      
};

export default PrivateRoute;