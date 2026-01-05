import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/common/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftAside from '../components/leftAside';
import RightAside from '../components/rightAside';
import Loding from '../components/common/Loding';

const MainLayout = () => {
   
     const {state} =useNavigation()
    // console.log(useNavigation())
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto my-3 md:my-5">
                    <LatestNews></LatestNews>
                </section>
                <nav className="w-11/12 mx-auto my-0 md:my-5">
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto md:flex gap-3'>
            {/* for mobile  */}
            <section className='my-3 lg:hidden'>
              <div className=' flex justify-between'>
              <div className='dropdown dropdown-right'>
                  <div tabIndex={0} role='button' className='btn btn-block'>
                     <h2 className='font-bold'>All categories</h2>
                </div>
                <div  tabIndex="-1"
        className="border-3 border-gray-600 menu menu-sm <NavLink to='/career'>Career</NavLink> dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow max-h-[70vh]
      overflow-y-auto">
                    <LeftAside></LeftAside>
                </div>
              </div>
                <div className='dropdown dropdown-left'>
                       <div tabIndex={0} role='button' className='btn btn-block'>
                     <h2 className='font-bold'>Explore more</h2>
                </div>
                <div  tabIndex="-1"
        className="border-3 border-gray-600 menu menu-sm <NavLink to='/career'>Career</NavLink> dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow max-h-[70vh]
      overflow-y-auto">
                    <RightAside></RightAside>
                </div>
                </div>
               
              </div>
            </section>
            {/* end */}
                <aside className='hidden md:block md:basis-3/12  sticky h-fit top-2'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="news-body w-full md:basis-6/12 ">
                    {state=="loading"? <Loding></Loding>:<Outlet></Outlet>}
                </section>
               <aside className='hidden md:block md:basis-3/12  sticky h-fit top-2 '>
                <RightAside></RightAside>
               </aside>
            </main>

        </div>
    );
};

export default MainLayout;
