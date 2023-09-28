// pages/contact.tsx
import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';

import '../app/globals.css';

const ContactPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            <section className="bg-black text-white py-16" style={{ width: '1440px' }}>

                <div className="w-[1440px] h-[719px] px-[84px] pt-64 pb-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                    <div className="self-stretch text-white text-8xl font-bold font-['Montserrat']">CONTACT</div>
                    <div className="h-[218px] pl-[800px] pr-[84px] flex-col justify-start items-start gap-8 flex">
                        <div className="self-stretch h-[71px] flex-col justify-start items-start gap-3 flex">
                            <div className="self-stretch text-white text-base font-semibold font-['Montserrat']">SEND AN EMAIL</div>
                            <div className="self-stretch text-white text-[32px] font-bold font-['Montserrat']">ieee@srmist.edu.in</div>
                        </div>
                        <div className="self-stretch h-[71px] flex-col justify-start items-start gap-3 flex">
                            <div className="self-stretch text-white text-base font-semibold font-['Montserrat']">PHONE US</div>
                            <div className="self-stretch text-white text-[32px] font-bold font-['Montserrat']">+91 1234567890</div>
                        </div>
                        <div className="self-stretch justify-between items-start inline-flex">
                            <div className="text-lime-400 text-[10px] font-semibold font-['Montserrat']">LINKEDIN</div>
                            <div className="text-lime-400 text-[10px] font-semibold font-['Montserrat']">INSTAGRAM</div>
                            <div className="text-lime-400 text-[10px] font-semibold font-['Montserrat']">GITHUB</div>
                            <div className="text-lime-400 text-[10px] font-semibold font-['Montserrat']">YOUTUBE</div>
                        </div>
                    </div>
                </div>

                <div className="w-[1440px] h-[456px] px-[84px] py-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                    <div className="w-[375px] h-[328px] relative">
                        <div className="left-0 top-[236px] absolute text-center text-white text-[38px] font-bold font-['Montserrat']">IEEE SRMIST<br />STUDENT BRANCH</div>
                        <img className="w-64 h-[235.68px] left-[56px] top-0 absolute" src="https://via.placeholder.com/256x236" />
                    </div>
                </div>

            </section>

        </div>
    );
};

export default ContactPage;
