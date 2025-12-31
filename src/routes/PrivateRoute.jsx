import React, {useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
  console.log("FROM PRIVATE:", location.pathname)

    if(loading){
        return <div className='flex justify-center mt-5'><span className="loading loading-ring loading-xl"></span></div>
    }
    if(!user){
       return <Navigate state={{ from: location.pathname }} to="/auth/login" />;
    }
    return children
};

export default PrivateRoute;