import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNew from '../components/LatestNew';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div className="relative ">

            {/* FIXED HEADER + NAV */}
            <div className="fixed top-0  w-full   z-50 bg-white ">
                <header className="mt-3">
                    <Header />
                    <section className="w-11/12 mx-auto my-3">
                        <LatestNew />
                    </section>
                </header>

                <nav className="w-11/12 mx-auto mb-3">
                    <Navbar />
                </nav>
            </div>

            {/* MAIN CONTENT */}
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 pt-[290px]">
                {/* left aside */}
                <aside className="col-span-3 sticky top-0 h-screen overflow-auto">
                    <LeftAside />
                </aside>

                {/* main news area */}
                <section className="col-span-6 overflow-auto h-screen pb-10">
                    <Outlet />
                </section>

                {/* right aside */}
                <aside className="col-span-3 sticky top-0 h-screen overflow-auto">
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;
