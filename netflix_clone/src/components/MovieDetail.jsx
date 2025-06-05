import React from 'react';

const MovieDetail = () => {
    return(
        <>
        {/* Overlay */}
        <div className='w-full h-full fixed top-0 left-0 z-10 bg-[rgba(0,0,0,0.6)]'></div>

        {/* Movie detail */}
        <div className='border border-amber-50 w-sm md:max-w-lg lg:max-w-xl h-80
        fixed top-1/2 left-1/2 transform -translate-1/2 bg-white z-20'>

            {/* Close Icon */}

            {/* Image */}
            <div className="bg-[url('/background.png')] bg-cover bg-center w-full h-42">
                {/* <img src="" alt="" className='w-full h-42'/> */}
            </div>

            {/* Description */}

        </div>
        </>
    )
}
export default MovieDetail;