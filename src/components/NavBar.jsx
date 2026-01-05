import React, { use } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import login from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
import { BsPersonCheckFill } from 'react-icons/bs';


const NavBar = () => {
    const location = useLocation();
    const isAuthPage =
  location.pathname === "/auth/login" ||
  location.pathname === "/auth/register";
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
        <div className='navbar flex items-center  w-full'>
            {
                !isAuthPage && <div className="navbar-start gap-3 w-2/3 md:w-1/3">
                     <div className='dropdown lg:hidden'>
                  <div tabIndex={0} role='button' className='btn btn-ghost btn-circle '>
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                  </div>
                   <ul
        tabIndex="-1"
        className="menu menu-sm <NavLink to='/career'>Career</NavLink> dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
      </ul>
            </div>
                    {user && <div className=' flex items-center gap-2'> 
               
                 <span className='font-bold text-xs md:text-sm rounded-md p-1 border-gray-300 border-2'>User : {user.email}</span></div>}</div>
            }
            <div className={`${!isAuthPage ? 'w-1/3' : 'w-full'} middle-options navbar-center  justify-center gap-3 text-accent hidden lg:flex`}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
           {!isAuthPage &&  <div className="navber-end w-1/3 login flex justify-end gap-6 ">
               <img src={login} alt="" className='hidden md:block' />
               {user?
               <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
               :<Link to='/auth/login' className='btn btn-primary'>
                Login
               </Link>}
               
            </div>}
        </div>
    );
};

export default NavBar;
