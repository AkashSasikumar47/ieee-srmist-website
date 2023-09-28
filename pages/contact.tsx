import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';

import '../app/globals.css';

const ContactPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            <section className="bg-black text-white py-16">

                {/* Desktop layout */}
                <div className="hidden sm:block max-w-screen-xl mx-auto px-4 sm:px-0 pt-64 pb-16 bg-black flex-col justify-start items-center gap-16">
                    <div className="self-stretch text-white text-8xl font-bold font-['Montserrat']">CONTACT</div>
                    <div className="w-full max-w-[400px] px-[84px] pt-3 pb-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                        <div className="w-full max-w-screen-xl mx-auto px-4 pt-3 pb-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                            <div className="self-stretch h-[174px] pr-[84px] lg:pl-[800px] lg:pr-[84px] pt-3 pb-16 bg-black flex-col justify-start items-center gap-8 inline-flex">
                                <div className="self-stretch h-[71px] flex-col justify-start items-start gap-1 flex">
                                    <div className="self-stretch text-white text-base font-semibold font-['Montserrat']" style={{ whiteSpace: 'nowrap' }}>SEND AN EMAIL</div>
                                    <div className="self-stretch text-white text-[32px] font-bold font-['Montserrat']" style={{ whiteSpace: 'nowrap' }}>ieee@srmist.edu.in</div>
                                </div>
                                <div className="self-stretch h-[71px] flex-col justify-start items-startx gap-1 flex">
                                    <div className="self-stretch text-white text-base font-semibold font-['Montserrat']" style={{ whiteSpace: 'nowrap' }}>PHONE US</div>
                                    <div className="self-stretch text-white text-[32px] font-bold font-['Montserrat']" style={{ whiteSpace: 'nowrap' }}>+91 1234567890</div>
                                </div>
                                <div className="self-stretch justify-between items-start inline-flex">
                                    <div className="text-lime-400 text-[10px] font-semibold font-['Montserrat']" style={{ whiteSpace: 'nowrap', marginRight: '28px' }}>LINKEDIN</div>
                                    <div className="text-lime-400 text-[10px] font-semibold font-['Montserrat']" style={{ whiteSpace: 'nowrap', marginRight: '28px' }}>INSTAGRAM</div>
                                    <div className="text-lime-400 text-[10px] font-semibold font-['Montserrat']" style={{ whiteSpace: 'nowrap', marginRight: '28px' }}>GITHUB</div>
                                    <div className="text-lime-400 text-[10px] font-semibold font-['Montserrat']" style={{ whiteSpace: 'nowrap', marginRight: '28px' }}>YOUTUBE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile layout */}
                <div className="block sm:hidden mx-auto px-4 py-8 bg-black text-center">
                    <div className="text-5xl font-bold font-montserrat">CONTACT</div>
                    <div className="mt-8">
                        <div className="text-xl font-semibold font-montserrat">SEND AN EMAIL</div>
                        <div className="text-2xl font-bold font-montserrat">ieee@srmist.edu.in</div>
                    </div>
                    <div className="mt-8">
                        <div className="text-xl font-semibold font-montserrat">PHONE US</div>
                        <div className="text-2xl font-bold font-montserrat">+91 1234567890</div>
                    </div>
                    <div className="mt-8 flex flex-col items-center gap-4">
                        <div className="text-lime-400 text-lg font-semibold font-montserrat">LINKEDIN</div>
                        <div className="text-lime-400 text-lg font-semibold font-montserrat">INSTAGRAM</div>
                        <div className="text-lime-400 text-lg font-semibold font-montserrat">GITHUB</div>
                        <div className="text-lime-400 text-lg font-semibold font-montserrat">YOUTUBE</div>
                    </div>
                </div>

                {/* Common content */}
                <div className="w-full max-w-screen-xl mx-auto px-4 pt-8 sm:pt-0 bg-black text-center">
                    <img className="w-64 max-w-xs mx-auto" src="https://via.placeholder.com/256x236" alt="IEEE SRMIST" />
                    <div className="text-xl font-bold font-montserrat mt-4">IEEE SRMIST STUDENT BRANCH</div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
