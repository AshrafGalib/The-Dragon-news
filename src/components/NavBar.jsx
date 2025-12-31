import React, { use } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import login from '../assets/user.png'
import { AuthContext } from '../Context/Context';
import { CgProfile } from 'react-icons/cg';
import { FaSignOutAlt } from 'react-icons/fa';

const NavBar = () => {
    const{user,signOutUser}=use(AuthContext)

const handleSignOut =()=>{
  signOutUser()
}
   
    return (
        <div className='flex items-center w-full'>
            <div className="w-1/3"></div>
            <div className="w-1/3 middle-options flex justify-center gap-3 text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="w-1/3 login flex justify-end gap-6">
               <div className="navbar-end">
    <details className="dropdown dropdown-end">
  <summary className="btn btn-black">{user?<CgProfile className='size-7' />:'Login/Reg.'}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-auto p-2 shadow-sm">
    <li >{user?<div ><h2 className='font-bold flex items-center gap-2' ><CgProfile className='size-4'/>{user.email}</h2></div>:
     <Link to='/auth/login'>Login</Link>}
    </li>
    <li >{user?<button onClick={handleSignOut} ><FaSignOutAlt />Sign out</button>:
     <Link to='/auth/register'>Registration</Link>}</li>
  </ul>
</details>
  </div>
            </div>
        </div>
    );
};

export default NavBar;