// 
import React from 'react';
import logo from '../../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
  const today = new Date();

  return (
    <div className="grid place-items-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6">
      
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="
          w-24 
          sm:w-28 
          md:w-36 
          lg:w-44
        "
      />

      {/* Tagline */}
      <p
        className="
          text-accent 
          text-xs 
          sm:text-sm 
          md:text-base
          text-center
        "
      >
        Journalism Without Fear or Favour
      </p>

      {/* Date */}
      <p
        className="
          font-semibold 
          text-xs 
          sm:text-sm 
          md:text-base
        "
      >
        {format(today, 'EEEE, ')}
        <span className="text-accent">
          {format(today, 'LLLL dd, yyyy')}
        </span>
      </p>
    </div>
  );
};

export default Header;
