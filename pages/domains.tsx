// pages/domains.tsx
import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import DomainAllPage from '../components/Domain/DomainAll/DomainAll';
import DomainSocietyPage from '../components/Domain/DomainSociety/DomainSociety';
import DomainRecruitmentPage from '../components/Domain/DomainRecruitment/DomainRecruitment';
import AboutBanner2 from '../components/About/AboutBanner2/AboutBanner2';
import FAQ from '../components/Home/FAQ/FAQ';

import '../app/globals.css';

const DomainsPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            <section className="bg-black text-white py-16" style={{ width: '1440px' }}>
                <div className="w-[1440px] h-[601px] px-[84px] pt-64 pb-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                    <div className="self-stretch text-white text-8xl font-bold font-['Montserrat']">DOMAINS</div>
                    <div className="w-[1440px] pl-[800px] pr-[84px] justify-start items-start gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-white text-base font-normal font-['Montserrat'] tracking-tight">Explore the multifaceted world of IEEE through its 11 dynamic domains. From cutting-edge research and development to fostering diversity in technology, each domain plays a pivotal role in shaping the future of innovation, connectivity, and engineering excellence</div>
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
