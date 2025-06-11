import React, { useRef, useState } from "react";
import { assets, movies } from "../assets/assets";
import HorizontalLine from "./HorizontalLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


const TrendingNow = () => {
    // Scroll with buttons using useRef() hook
    let scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });

        // Update the buttons' visibility after each scroll
        setTimeout(handleScrollButtons, 300) // Give time for the smooth behavior to settle.
    }
    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        setTimeout(handleScrollButtons, 300);
    }

    /**
     * Show / Hide scroll buttons based on scroll direction using these 3 DOM properties:
     * - scrollLeft: Calculates how far the element is scrolled to the left (in px).
     * - scrollWidth: Calculates the total scrollable with including the hidden contents.
     * - clientWidth: Calculates the visible width of the container (like a view port).
     */

    let [showLeftButton, setShowLeftButton] = useState(false);
    let [showRightButton, setShowRightButton] = useState(true);

    const handleScrollButtons = () => {
        // Get the scrolled element from where 'ref' is attached to
        const el = scrollRef.current; // The same as document.getElementById('#theSrolledElement');
        if (!el) return;

        // Update the states
        setShowLeftButton(el.scrollLeft > 0);
        setShowRightButton(el.scrollLeft + el.clientWidth < el.scrollWidth);
    }

    // Update the state by the Id of the selected movie
    let [selectedMovie, setSelectedMovie] = useState(null);
    const updateSelectedMovie = (movieId) => {
        setSelectedMovie(movieId)
    }
    // Call MovieDetail component on click
    selectedMovie && alert(selectedMovie) //<MovieDetail selectedMovie={selectedMovie}/>

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
                        className={`absolute ${showLeftButton ? '-left-1' : '-left-10 opacity-0'} 
                    transition-all duration-300 ease-in-out bg-black px-1 md:px-2 h-full
                    flex items-center justify-center z-10 behavior-smooth`}>
                        <button className=" text-white bg-gray-900 px-1 md:px-2 py-8 rounded">
                            <FontAwesomeIcon icon={faChevronLeft} className="md:text-2xl" />
                        </button>
                    </div>

                    {/* right button  */}
                    <div
                        onClick={scrollRight}
                        className={`absolute ${showRightButton ? '-right-1' : '-right-10 opacity-0'}
                    transition-all duration-300 ease-in-out bg-black px-1 md:px-2 h-full
                    flex items-center justify-center z-10`}>
                        <button className="text-white bg-gray-900 px-1 md:px-2 py-8 rounded">
                            <FontAwesomeIcon icon={faChevronRight} className="md:text-2xl" />
                        </button>
                    </div>

                    {/* Movies */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScrollButtons}
                        id="movies"
                        className="w-full h-full overflow-x-auto overflow-y-hidden no-scrollbar whitespace-nowrap">
                        {
                            movies.map((movie) => (
                                <div
                                    key={movie.id}
                                    
                                    className="relative inline-block w-20 md:w-32 lg:w-42 h-full mx-3 md:mx-4 lg:mx-5 py-3">

                                    {/* Logo */}
                                    <img
                                        src="/logo.png"
                                        alt="Netflix Logo"
                                        className="w-1 md:w-3 absolute top-5 left-1 md:left-2" />

                                    {/* Movie */}
                                    <img
                                        src={movie.image}
                                        alt={movie.title}
                                        onClick={() => updateSelectedMovie(movie.id)}
                                        className="max-w-full h-full rounded-lg hover:scale-110 transition-transform duration-300" />

                                    {/* ID */}
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