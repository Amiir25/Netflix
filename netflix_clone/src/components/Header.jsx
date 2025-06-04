import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <>
            <header className="w-full h-[90vh] md:min-h-screen text-white flex flex-col"
            style={{backgroundImage: "url('/background.png')"}}>
                <div id="header-wrapper" className="relative flex-1 bg-[rgba(0,0,0,0.8)]">
                    {/* ------------ Navbar ------------ */}
                    <Navbar />

                    {/* ------------ Hero ------------ */}
                    <div id="hero" className="container mx-auto px-6 md:px-20 lg:px-32 my-10 text-center
                    md:absolute bottom-16 left-1/2 md:transform md:-translate-x-1/2">
                        <h1 className="w-90 lg:w-120 text-3xl md:text-4xl lg:text-5xl
                        font-bold lg:font-black mx-auto leading-tight">
                            Unlimited movies, TV shows, and more
                        </h1>
                        <h5 className="text-sm lg:text-lg m-3 font-semibold">Starts at USD 2.99. Cancel anytime.</h5>
                        <p className="text-sm lg:text-md px-2 mt-8 mb-1">Ready to watch? Enter your email to create or restart your
                            membership.</p>

                        <div id="hero-btns" className="w-full flex flex-col md:flex-row items-start justify-center">
                            {/* Email address */}
                            <label for="email" className="sr-only">Email Address</label>
                            <input id="email" type="email" placeholder="Email address"
                            className="mx-auto md:mx-2 mt-3 w-full md:w-72 lg:w-92 p-4 bg-[rgba(0,0,0,0.6)] rounded border border-gray-400
                            focus:outline-none focus:ring"/>

                            {/* Get Started */}
                            <button id="get-started-btn" className="text-md md:text-2xl font-semibold bg-[#e50914] px-7 py-3 mx-auto md:mx-2
                        my-3 rounded hover:bg-red-700">
                                Get Started
                                <i className="fa-solid fa-chevron-right mx-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;