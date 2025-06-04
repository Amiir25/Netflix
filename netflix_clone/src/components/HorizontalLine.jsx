import React from "react";

const HorizontalLine = () => {
    return (
        <>
            <div class="w-full h-1">
                <svg viewBox="0 0 1000 1" preserveAspectRatio="none" class="w-full h-full">
                    <path d="M0,1 C200,0 800,0 1000,1" stroke="url(#gradient)" fill="none" stroke-width="1" />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#2b0f1c" />
                            <stop offset="25%" stop-color="#b52867" />
                            <stop offset="50%" stop-color="#e50914" />
                            <stop offset="75%" stop-color="#b52867" />
                            <stop offset="100%" stop-color="#2b0f1c" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </>
    )
}
export default HorizontalLine;