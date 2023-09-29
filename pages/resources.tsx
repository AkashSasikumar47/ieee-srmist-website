// pages/resources.tsx
import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import ResourcesXplore from '../components/Resources/ResourcesXplore/ResourcesXplore';
import ResourcesPaper from '../components/Resources/ResourcesPaper/ResourcesPaper';
import ResourcesActivity from '../components/Resources/ResourcesActivity/ResourcesActivity';
import AboutBanner2 from '../components/About/AboutBanner2/AboutBanner2';


import '../app/globals.css';

const ResourcesPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            <section className="bg-black text-white py-16">

                {/* Desktop layout */}
                <div className="hidden sm:block max-w-screen-xl mx-auto px-4 sm:px-0 pt-64 pb-16 bg-black flex-col justify-start items-center gap-16">
                    <div className="self-stretch text-white text-8xl font-bold font-['Montserrat']">RESOURCES</div>
                    <div className="w-full max-w-screen-xl mx-auto px-4 pt-3 pb-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                        <div className="w-full max-w-screen-xl mx-auto px-4 pt-3 pb-16 bg-black flex-col justify-start items-center gap-8 inline-flex">
                            <div className="self-stretch h-[174px] pr-[84px] lg:pl-[800px] lg:pr-[84px] pt-3 pb-16 bg-black flex-col justify-start items-center gap-8 inline-flex">
                                <div className="grow shrink basis-0 text-white text-base font-normal font-['Montserrat'] tracking-tight">Explore a wealth of resources curated to support your academic and professional growth. From educational materials and cutting-edge research to career development tools and industry standards, our IEEE resources are here to empower your journey to success. Dive in and discover the knowledge that will shape your future.</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Mobile layout */}
                <div className="block sm:hidden mx-auto px-4 py-8 bg-black text-center">
                    <div className="text-5xl font-bold font-montserrat">RESOURCES</div>
                    <div className="mt-8">
                        <p className="text-xl font-normal font-['Montserrat'] tracking-tight">Explore a wealth of resources curated to support your academic and professional growth. From educational materials and cutting-edge research to career development tools and industry standards, our IEEE resources are here to empower your journey to success. Dive in and discover the knowledge that will shape your future.</p>
                    </div>
                </div>

            </section>

            <ResourcesXplore />
            <ResourcesPaper />
            <ResourcesActivity />
            <AboutBanner2 />


            <Footer />
        </div>
    );
};

export default ResourcesPage;
