// import React, { use } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import login from '../assets/user.png'
// import { AuthContext } from '../Provider/AuthProvider';
// import { BsPersonCheckFill } from 'react-icons/bs';


// const NavBar = () => {
//     const location = useLocation();
//     const isAuthPage =
//   location.pathname === "/auth/login" ||
//   location.pathname === "/auth/register";
//    const {user,logout}=use(AuthContext)
//    const handleLogout =()=>{
//       logout()
//       .then(() => {
//   alert('logged out successfully')
// }).catch((error) => {
//   console.log(error.message)
// });
//    }
//     return (
//         <div className='flex items-center w-full'>
//             {
//                 !isAuthPage && <div className="w-1/3">{user && <div className='flex items-center gap-2'><BsPersonCheckFill /><span className='font-bold text-sm rounded-md p-1 border-gray-300 border-2'>{user.email}</span></div>}</div>
//             }
//             <div className={`${!isAuthPage ? 'w-1/3' : 'w-full'} middle-options flex justify-center gap-3 text-accent`}>
//                 <NavLink to='/'>Home</NavLink>
//                 <NavLink to='/about'>About</NavLink>
//                 <NavLink to='/career'>Career</NavLink>
//             </div>
//            {!isAuthPage &&  <div className="w-1/3 login flex justify-end gap-6">
//                <img src={login} alt="" />
//                {user?
//                <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
//                :<Link to='/auth/login' className='btn btn-primary'>
//                 Login
//                </Link>}
               
//             </div>}
//         </div>
//     );
// };

// export default NavBar;

import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import login from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';
import { BsPersonCheckFill } from 'react-icons/bs';

const NavBar = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/auth/login" ||
    location.pathname === "/auth/register";

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => alert('Logged out successfully'))
      .catch(error => console.log(error.message));
  };

  return (
    <div
      className="
        flex flex-col
        md:flex-row
        items-center
        justify-between
        gap-4
        w-full
        px-4
        py-3
      "
    >

      {/* LEFT: User Info (lg+ only) */}
      {!isAuthPage && (
        <div className="hidden lg:flex lg:w-1/3 items-center">
          {user && (
            <div className="flex items-center gap-2">
              <BsPersonCheckFill />
              <span className="font-bold text-sm rounded-md px-2 py-1 border border-gray-300">
                {user.email}
              </span>
            </div>
          )}
        </div>
      )}

      {/* MIDDLE: Navigation */}
      <div
        className={`
          flex justify-center gap-4 text-accent
          w-full
          md:w-auto
          ${!isAuthPage ? 'lg:w-1/3' : ''}
        `}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      {/* RIGHT: Login / Logout */}
      {!isAuthPage && (
        <div className="flex items-center gap-4 w-full md:w-auto lg:w-1/3 justify-center md:justify-end">
          <img src={login} alt="user" className="w-8 h-8" />

          {user ? (
            <button onClick={handleLogout} className="btn btn-primary btn-sm">
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
