import React from "react";
import { assets, movies } from "../assets/assets";
import HorizontalLine from "./HorizontalLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


const TrendingNow = () => {
    return (
        <>
            {/*------------ Horizontal Line ------------*/}
            <HorizontalLine />

            {/*------------ Trending Now ------------*/}
            <div id="trending-now" className="mb-80 mt-20 mx-6 md:mx-20 lg:mx-32">
                {/* Title */}
                <h2 className="text-white text-lg md:text-2xl lg:text-3xl font-medium mb-6">Trending Now</h2>
                <div id="movie-wrapper" className="border border-whie relative w-full h-40 md:h-56 lg:h-68 flex items-center">
                    {/* Left button */}
                    <div className="absolute -left-1 bg-black px-2 h-full flex items-center justify-center z-10">
                        <button className=" text-white bg-gray-900 px-0.2 py-8 px-2 rounded">
                            <FontAwesomeIcon icon={faChevronLeft} className="md:text-2xl" />
                        </button>
                    </div>
                    {/* right button  */}
                    <div className="absolute -right-1 bg-black px-2 h-full flex items-center justify-center z-10">
                        <button className="text-white bg-gray-900 px-0.2 py-8 px-2 rounded">
                            <FontAwesomeIcon icon={faChevronRight} className="md:text-2xl" />
                        </button>
                    </div>
                    
                    {/* Movies */}
                    <div id="movies" className="w-full h-full overflow-x-auto overflow-y-hidden scrollbar-hide whitespace-nowrap">
                        {
                            movies.map((movie) => (
                                <div className="relative inline-block w-24 md:w-38 lg:w-48 h-full mx-1 md:mx-2 lg:mx-3
                                    bg-cover bg-center rounded-lg"
                                    style={{backgroundImage: `url(${movie.image})`}}>
                                    <h1 className="absolute -left-2 top-1/2 text-white text-4xl lg:text-7xl font-bold">{movie.id}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div> {/*  movie-wrapper */}
            </div>{/* trending-now */}
        </>
    )
}

export default TrendingNow;