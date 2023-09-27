// pages/resources.tsx
import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import ResourcesXplore from '../components/Resources/ResourcesXplore/ResourcesXplore';
import ResourcesPaper from '../components/Resources/ResourcesPaper/ResourcesPaper';
import ResourcesActivity from '../components/Resources/ResourcesActivity/ResourcesActivity';
import AboutBanner2 from '../components/About/AboutBanner2/AboutBanner2';
import FAQ from '../components/Home/FAQ/FAQ';

import '../app/globals.css';

const ResourcesPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            <section className="bg-black text-white py-16" style={{ width: '1440px' }}>
                <div className="w-[1440px] h-[621px] px-[84px] pt-64 pb-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                    <div className="self-stretch text-white text-8xl font-bold font-['Montserrat']">RESOURCES</div>
                    <div className="w-[1440px] pl-[800px] pr-[84px] justify-start items-start gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-white text-base font-normal font-['Montserrat'] tracking-tight">Explore a wealth of resources curated to support your academic and professional growth. From educational materials and cutting-edge research to career development tools and industry standards, our IEEE resources are here to empower your journey to success. Dive in and discover the knowledge that will shape your future.</div>
                    </div>
                </div>
            </section>

            <ResourcesXplore />
            <ResourcesPaper />
            <ResourcesActivity />
            <AboutBanner2 />
            <FAQ />

            <Footer />
        </div>
    );
};

export default ResourcesPage;
