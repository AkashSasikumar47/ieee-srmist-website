import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="bg-black text-white py-16">
            {/* Desktop Layout */}
            <div className="hidden sm:block text-center">
                <div className="text-center text-zinc-300 text-[200px] font-semibold font-['Montserrat']">IEEE SRMIST</div>

                <div className="w-[1440px] px-[84px] py-4 justify-between items-center inline-flex">
                    <div className="grow shrink basis-0 text-center text-white text-base font-semibold font-['Montserrat']">WELCOME TO IEEE SRMIST STUDENT BRANCH</div>
                    <div className="grow shrink basis-0 text-center text-white text-base font-semibold font-['Montserrat']">JOIN US IN EXPLORING THE WORLD OF TECHNOLOGY</div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden text-center">
                <div className="text-zinc-300 text-6xl font-semibold font-['Montserrat'] mb-8">IEEE SRMIST</div>
                <div className="px-4 py-4">
                    <div className="text-white text-base font-semibold font-['Montserrat'] mb-4">WELCOME TO IEEE SRMIST STUDENT BRANCH</div>
                    <div className="text-white text-base font-semibold font-['Montserrat'] mb-4">JOIN US IN EXPLORING THE WORLD OF TECHNOLOGY</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
