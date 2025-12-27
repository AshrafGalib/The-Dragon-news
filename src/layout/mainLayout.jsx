import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/common/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftAside from '../components/leftAside';
import RightAside from '../components/rightAside';
import Categories from '../components/Categories';



const mainLayout = () => {
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
                    <Outlet></Outlet>
                </section>
               <aside className='basis-3/12 sticky h-fit top-2 '>
                <RightAside></RightAside>
               </aside>
            </main>
        </div>
    );
};

export default mainLayout;
