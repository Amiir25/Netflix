import React, { useRef } from "react";
import { assets, movies } from "../assets/assets";
import HorizontalLine from "./HorizontalLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


const TrendingNow = () => {
    // Scroll with button
    let scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }

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
                    <div 
                    onClick={scrollLeft}
                    className="absolute -left-1 bg-black px-2 h-full flex items-center justify-center z-10">
                        <button className=" text-white bg-gray-900 px-0.2 py-8 px-2 rounded">
                            <FontAwesomeIcon icon={faChevronLeft} className="md:text-2xl" />
                        </button>
                    </div>
                    {/* right button  */}
                    <div
                    onClick={scrollRight}
                    className="absolute -right-1 bg-black px-2 h-full flex items-center justify-center z-10">
                        <button className="text-white bg-gray-900 px-0.2 py-8 px-2 rounded">
                            <FontAwesomeIcon icon={faChevronRight} className="md:text-2xl" />
                        </button>
                    </div>
                    
                    {/* Movies */}
                    <div
                    ref={scrollRef}
                    id="movies"
                    className="w-full h-full overflow-x-auto overflow-y-hidden no-scrollbar whitespace-nowrap">
                        {
                            movies.map((movie) => (
                                <div 
                                key={movie.id}
                                className="relative inline-block w-20 md:w-32 lg:w-42 h-full mx-3 md:mx-4 lg:mx-5 py-3">

                                    <img 
                                    src={movie.image} 
                                    alt={movie.title}
                                    className="max-w-full h-full rounded-lg hover:scale-110 transition-transform duration-300"/>

                                    <h1 className="absolute top-1/2 -left-3 md:-left-4 lg:-left-6 text-stroke-white
                                    text-black text-5xl md:text-6xl lg:text-8xl font-black">
                                        {movie.id}
                                    </h1>

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