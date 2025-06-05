import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MovieDetail = () => {
    return (
        <>
            {/* Overlay */}
            <div className='w-full h-full fixed top-0 left-0 z-10 bg-[rgba(0,0,0,0.6)]'></div>

            {/* Movie detail */}
            <div className='bg-black border border-amber-50 w-full min-[620px]:w-xl
            fixed top-1/2 left-1/2 transform -translate-1/2 z-20'>

                {/* Close Icon */}

                {/* Image */}
                <div className="relative bg-cover bg-center w-full h-54 md:h-62 lg:h-80"
                    style={{ backgroundImage: "url('/background.png')" }}>
                    {/* Overlays for shadows */}
                    <div className='w-full h-full bg-gradient-to-b from-transparent via-black/20 to-black'></div>
                    <div className='absolute bottom-0 left-0 w-1/2 h-full bg-[linear-gradient(45deg,_rgba(0,0,0,1),_rgba(0,0,0,0.9),_transparent_65%)]'></div>
                </div>

                {/* Description */}
                <div className='text-white'>
                    <h2>CRIMINAL CODE</h2>
                    <div>
                        <span className="mx-2">2025</span>
                        <span className="mx-2">18+</span>
                        <span className="mx-2">Show</span>
                        <span className="mx-2">Action</span>
                        <span className="mx-2">Dramas</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores asperiores distinctio quae accusamus, perferendis natus quam dicta placeat. Impedit, fugiat.
                    </p>
                    <button className="text-md md:text-2xl font-semibold bg-[#e50914] px-7 py-3 mx-auto md:mx-2 my-3 rounded hover:bg-red-700">
                        Get Started
                        <FontAwesomeIcon icon={faChevronRight} className='mx-2' />
                    </button>
                </div>

            </div>
        </>
    )
}
export default MovieDetail;