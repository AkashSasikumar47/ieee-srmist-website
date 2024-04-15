import React from 'react';

const Hero = () => {
    return (
        <div className="relative min-h-screen">
            <video autoPlay loop muted className="w-full h-full min-h-screen object-cover">
                <source src="/videos/Hero-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full px-4 py-2 flex items-center justify-between">
                <a href="/" className="inline-flex items-center" aria-label="logo">
                    <img src="/assets/Logo/IEEE SRM.svg" alt="IEEE SRM logo" className="h-10 md:h-14" />
                </a>
                <a href="https://www.ieeesrmist.com/" className="inline-flex items-center font-normal text-white text-base md:text-xl" aria-label="logo">
                    LOGIN
                </a>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="font-bold text-white text-8xl sm:text-12xl md:text-16xl lg:text-20xl 2xl:text-24xl text-center">
                    IEEE
                </div>
                <h1 className="font-bold text-white text-xs md:text-base xl:text-xl text-center">SRM STUDENT BRANCH</h1>
            </div>
        </div>
    );
}

export default Hero;