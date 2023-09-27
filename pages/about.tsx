// pages/about.tsx
import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import AboutBanner from '../components/About/AboutBanner/AboutBanner';
import AboutBanner2 from '../components/About/AboutBanner2/AboutBanner2';
import AboutCouncillor from '../components/About/AboutCouncillor/AboutCouncillor';
import AboutInfo from '../components/About/AboutInfo/AboutInfo';
import AboutTeam from '../components/About/AboutTeam/AboutTeam';

import '../app/globals.css';

const AboutPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            <section className="bg-black text-white py-16" style={{ width: '1440px' }}>
                <div className="w-[1440px] h-[621px] px-[84px] pt-64 pb-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                    <div className="self-stretch text-white text-8xl font-bold font-['Montserrat']">ABOUT US</div>
                    <div className="w-[1440px] pl-[800px] pr-[84px] justify-start items-start gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-white text-base font-normal font-['Montserrat'] tracking-tight">IEEE SRM is more than just a student club; it's a dynamic chapter dedicated to advancing technology for the betterment of humanity. We bridge gaps in knowledge through engaging activities across diverse domains, ensuring every student's passion and interest is acknowledged. It's a shared platform for nurturing new ideas and projects.</div>
                    </div>
                </div>
            </section>

            <AboutBanner />
            <AboutInfo />
            <AboutBanner2 />
            <AboutCouncillor />
            <AboutTeam />

            <Footer />
        </div >
    );
};

export default AboutPage;
