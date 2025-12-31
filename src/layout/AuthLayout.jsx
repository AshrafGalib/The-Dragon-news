import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className=' bg-base-200 min-h-screen'>
            <header className=''>
                <div className='p-8'>
                    <NavBar></NavBar>
                </div>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;