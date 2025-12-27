import React, { use } from 'react';
import { AuthContext } from '../Context/Context';
import { Navigate, NavLink, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,loading}=use(AuthContext)
    const location=useLocation()
   // console.log(location.pathname)

    if(loading){
        return <div className='flex justify-center mt-5'><span className="loading loading-ring loading-xl"></span></div>
    }
    if(!user){
      return  <Navigate state={{ from: location.pathname }} to='/login'></Navigate>
    }
    return children
};

export default PrivateRoute;