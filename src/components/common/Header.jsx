import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    const today =new Date()
    return (
        <div className=' grid place-items-center gap-3 mt-6'>
            <img src={logo} className='w-117.5' alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold'>{format(today,'EEEE, ')}
                <span className='text-accent'>
                    {format(today,'LLLL dd, yyyy')}
                </span>
            </p>
        </div>
    );
};

export default Header;