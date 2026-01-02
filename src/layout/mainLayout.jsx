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
                <section className="w-11/12 mx-auto my-5">
                    <LatestNews></LatestNews>
                </section>
                <nav className="w-11/12 mx-auto my-5">
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto flex gap-3'>
                <aside className='basis-3/12 sticky h-fit top-2'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="news-body basis-6/12 ">
                    {state=="loading"? <Loding></Loding>:<Outlet></Outlet>}
                </section>
               <aside className='basis-3/12 sticky h-fit top-2 '>
                <RightAside></RightAside>
               </aside>
            </main>
        </div>
    );
};

export default MainLayout;
