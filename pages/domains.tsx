// pages/domains.tsx
import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import DomainAllPage from '../components/Domain/DomainAllPage/DomainAllPage';
import DomainSocietyPage from '../components/Domain/DomainSociety/DomainSociety';
import DomainRecruitmentPage from '../components/Domain/DomainRecruitment/DomainRecruitment';
import AboutBanner2 from '../components/About/AboutBanner2/AboutBanner2';
import FAQ from '../components/Home/FAQ/FAQ';

import '../app/globals.css';

const DomainsPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            <section className="bg-black text-white py-16">

                {/* Desktop layout */}
                <div className="hidden sm:block max-w-screen-xl mx-auto px-4 sm:px-0 pt-64 pb-16 bg-black flex-col justify-start items-center gap-16">
                    <div className="self-stretch text-white text-8xl font-bold font-['Montserrat']">DOMAINS</div>
                    <div className="w-full max-w-screen-xl mx-auto px-4 pt-3 pb-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                        <div className="w-full max-w-screen-xl mx-auto px-4 pt-3 pb-16 bg-black flex-col justify-start items-center gap-8 inline-flex">
                            <div className="self-stretch h-[174px] pr-[84px] lg:pl-[800px] lg:pr-[84px] pt-3 pb-16 bg-black flex-col justify-start items-center gap-8 inline-flex">
                                <div className="grow shrink basis-0 text-white text-base font-normal font-['Montserrat'] tracking-tight">Explore the multifaceted world of IEEE through its 11 dynamic domains. From cutting-edge research and development to fostering diversity in technology, each domain plays a pivotal role in shaping the future of innovation, connectivity, and engineering excellence</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Mobile layout */}
                <div className="block sm:hidden mx-auto px-4 py-8 bg-black text-center">
                    <div className="text-5xl font-bold font-montserrat">DOMAINS</div>
                    <div className="mt-8">
                        <p className="text-xl font-normal font-['Montserrat'] tracking-tight">Explore the multifaceted world of IEEE through its 11 dynamic domains. From cutting-edge research and development to fostering diversity in technology, each domain plays a pivotal role in shaping the future of innovation, connectivity, and engineering excellence</p>
                    </div>
                </div>

            </section>

            <DomainAllPage />
            <DomainSocietyPage />
            <DomainRecruitmentPage />
            <AboutBanner2 />
            <FAQ />

            <Footer />
        </div>
    );
};

export default DomainsPage;
