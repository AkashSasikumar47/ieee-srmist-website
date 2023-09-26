import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '1440px', height: '740px' }}>

            <div className="text-center text-zinc-300 text-[200px] font-semibold font-montserrat">IEEE SRMIST</div>

            <div className="w-[1440px] px-[84px] py-4 left-0 top-[645px] absolute justify-between items-center inline-flex">
                <div className="w-[400px] text-center text-white text-base font-semibold font-montserrat">WELCOME TO IEEE SRMIST STUDENT BRANCH</div>
                <div className="text-center text-white text-base font-semibold font-montserrat">JOIN US IN EXPLORING THE WORLD OF TECHNOLOGY</div>
            </div>

        </section>
    );
};

export default Hero;
