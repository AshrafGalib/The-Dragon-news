import React, { use } from 'react';
import { Link, NavLink } from 'react-router-dom';
import login from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
import { BsPersonCheckFill } from 'react-icons/bs';


const NavBar = () => {
   const {user,logout}=use(AuthContext)
   const handleLogout =()=>{
      logout()
      .then(() => {
  alert('logged out successfully')
}).catch((error) => {
  console.log(error.message)
});
   }
    return (
        <div className='flex items-center w-full'>
            <div className="w-1/3">{user && <div className='flex items-center gap-2'><BsPersonCheckFill /><span className='font-bold text-sm rounded-md p-1 border-gray-300 border-2'>{user.email}</span></div>}</div>
            <div className="w-1/3 middle-options flex justify-center gap-3 text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="w-1/3 login flex justify-end gap-6">
               <img src={login} alt="" />
               {user?
               <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
               :<Link to='/auth/login' className='btn btn-primary'>
                Login
               </Link>}
               
            </div>
        </div>
    );
};

export default NavBar;