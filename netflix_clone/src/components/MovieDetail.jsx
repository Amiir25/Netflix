import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const MovieDetail = () => {
    return (
        <>
            {/* Overlay */}
            <div className='w-full h-full fixed top-0 left-0 z-10 bg-[rgba(0,0,0,0.6)]'></div>

            {/* Movie detail */}
            <div className='bg-black w-full min-[620px]:w-xl border border-gray-600 rounded-lg
            fixed top-1/2 left-1/2 transform -translate-1/2 z-20'>

                {/* Image */}
                <div className="relative bg-cover bg-center w-full h-54 md:h-62 lg:h-80"
                    style={{ backgroundImage: "url('/background.png')" }}>
                    
                    {/* Close Icon */}
                    <FontAwesomeIcon icon={faXmark} className='float-right text-white text-3xl m-4 p-1 w-[28px] h-[28px] rounded-full 
                    hover:bg-[rgba(200,200,200,0.4)] transition-all duration-200'/>
                    
                    {/* Overlays for shadows */}
                    <div className='w-full h-full bg-gradient-to-b from-transparent via-black/20 to-black'></div>
                    <div className='absolute bottom-0 left-0 w-1/2 h-full bg-[linear-gradient(45deg,_rgba(0,0,0,1),_rgba(0,0,0,0.9),_transparent_65%)]'></div>
                </div>

                {/* Description */}
                <div className='text-white px-4'>
                    <h2>CRIMINAL CODE</h2>
                    <div>
                        <span className="me-2 text-xs md:text-sm bg-gray-500 px-2 py-0.5 rounded">2025</span>
                        <span className="me-2 text-xs md:text-sm bg-gray-500 px-2 py-0.5 rounded">18+</span>
                        <span className="me-2 text-xs md:text-sm bg-gray-500 px-2 py-0.5 rounded">Show</span>
                        <span className="me-2 text-xs md:text-sm bg-gray-500 px-2 py-0.5 rounded">Action</span>
                        <span className="me-2 text-xs md:text-sm bg-gray-500 px-2 py-0.5 rounded">Dramas</span>
                    </div>
                    <p className='text-sm md:text-md my-4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores asperiores distinctio quae accusamus, perferendis natus quam dicta placeat. Impedit, fugiat.
                    </p>
                    <button className="w-full min-[620px]:w-1/3 text-md md:text-lg font-semibold bg-[#e50914] px-7 py-3 my-3 rounded hover:bg-red-700">
                        Get Started
                        <FontAwesomeIcon icon={faChevronRight} className='mx-2' />
                    </button>
                </div>

            </div>
        </>
    )
}
export default MovieDetail;