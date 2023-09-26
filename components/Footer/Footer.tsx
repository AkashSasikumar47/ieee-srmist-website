import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-16" style={{ width: '1440px', height: '740px' }}>

            <div className="w-[1440px] h-[740px] pt-12 pb-11 bg-black flex-col justify-end items-center gap-16 inline-flex">
                <div className="w-[375px] h-[328px] relative flex-col justify-start items-start flex">
                    <img className="w-64 h-[235.68px]" src="https://via.placeholder.com/256x236" />
                    <div className="text-center text-white text-[38px] font-bold font-['Montserrat']">IEEE SRMIST<br />STUDENT BRANCH</div>
                </div>
                <div className="self-stretch h-64 px-[84px] py-4 flex-col justify-between items-start inline-flex">
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
            </div>

        </footer>
    );
};

export default Footer;