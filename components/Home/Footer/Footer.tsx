import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-16" style={{ width: '1440px', height: '740px' }}>

            <div className="w-[1440px] h-[740px] px-[84px] py-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                <div className="w-[375px] h-[328px] relative">
                    <div className="left-0 top-[236px] absolute text-center text-white text-[38px] font-bold font-['Montserrat']">IEEE SRMIST<br />STUDENT BRANCH</div>
                    <img className="w-64 h-[235.68px] left-[56px] top-0 absolute" src="https://via.placeholder.com/256x236" />
                </div>
                <div className="w-[1272px] h-56 relative rounded-lg border border-stone-500">
                    <div className="left-[32px] top-[32px] absolute text-center text-white text-2xl font-semibold font-['Montserrat']">CONTACT US</div>
                    <div className="left-[880px] top-[190px] absolute justify-center items-center gap-4 inline-flex">
                        <div className="text-center text-white text-base font-semibold font-['Montserrat']">HOME</div>
                        <div className="text-center text-white text-base font-semibold font-['Montserrat']">ABOUT</div>
                        <div className="text-center text-white text-base font-semibold font-['Montserrat']">EVENTS</div>
                        <div className="text-center text-white text-base font-semibold font-['Montserrat']">BLOG</div>
                        <div className="text-center text-white text-base font-semibold font-['Montserrat']">CONTACT</div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;