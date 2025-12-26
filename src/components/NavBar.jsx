import React from 'react';
import { NavLink } from 'react-router';
import login from '../assets/user.png'

const NavBar = () => {
    return (
        <div className='flex items-center w-full'>
            <div className="w-1/3"></div>
            <div className="w-1/3 middle-options flex justify-center gap-3 text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="w-1/3 login flex justify-end gap-2">
                <img src={login} alt="" srcset="" />
                <button className='btn btn-primary'>Login</button>
            </div>
        </div>
    );
};

export default NavBar;