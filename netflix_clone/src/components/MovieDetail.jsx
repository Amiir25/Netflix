import React from 'react';

const MovieDetail = () => {
    return(
        <>
        {/* Overlay */}
        <div className='w-full h-full fixed top-0 left-0 z-10 bg-[rgba(0,0,0,0.6)]'></div>

        {/* Movie detail */}
        <div className='border border-amber-50 w-full md:w-xl h-100 md:h-132
        fixed top-1/2 left-1/2 transform -translate-1/2 z-20'>

            {/* Close Icon */}

            {/* Image */}
            <div className="relative bg-cover bg-center w-full h-54 md:h-62 lg:h-80"
            style={{backgroundImage: "url('/background.png')"}}>
                {/* Overlays for shadows */}
                <div className='w-full h-full bg-gradient-to-b from-transparent via-black/20 to-black'></div>
                <div className='absolute bottom-0 left-0 w-1/2 h-full bg-[linear-gradient(45deg,_rgba(0,0,0,1),_rgba(0,0,0,0.9),_transparent_65%)]'></div>
            </div>

            {/* Description */}

        </div>
        </>
    )
}
export default MovieDetail;