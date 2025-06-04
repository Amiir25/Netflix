import React from "react";
import { assets } from '../assets/assets';

const Navbar = () => {
    return (
        <>
            <nav id="nav" className="container mx-auto flex items-center justify-between 
                py-7 px-6 md:px-20 lg:px-32">

                <img src={assets.netflix_logo} alt="Netflix Official Logo"
                    className="w-[100px] md:w-[120px] lg:w-[150px]" />
                <button id="signin-btn" className="font-semibold bg-[#e50914] px-3 py-1 rounded hover:bg-red-700">
                    SignIn
                </button>
            </nav>
        </>
    )
}

export default Navbar;