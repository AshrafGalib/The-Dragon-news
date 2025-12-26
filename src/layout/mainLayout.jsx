import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/common/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';


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
            <main>
                <section className="left-nav"></section>
                <section className="news-body">
                    <Outlet></Outlet>
                </section>
                <section className="right-nav"></section>
            </main>
        </div>
    );
};

export default mainLayout;
