// pages/gallery.tsx
import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import GalleryImages from '../components/Gallery/GalleryImages/GalleryImages';
import AboutBanner2 from '../components/About/AboutBanner2/AboutBanner2';
import FAQ from '../components/Home/FAQ/FAQ';

import '../app/globals.css';

const GalleryPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            <section className="bg-black text-white py-16" style={{ width: '1440px' }}>
                <div className="w-[1440px] h-[621px] px-[84px] pt-64 pb-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                    <div className="self-stretch text-white text-8xl font-bold font-['Montserrat']">GALLERY</div>
                    <div className="w-[1440px] pl-[800px] pr-[84px] justify-start items-start gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-white text-base font-normal font-['Montserrat'] tracking-tight">Explore the visual highlights of IEEE SRMIST SB through our gallery. View captivating images and photos that showcase our events, activities, and the vibrant community that makes our IEEE chapter unique. From technical workshops to social gatherings, our gallery provides a glimpse into the memorable moments and experiences shared by our members.</div>
                    </div>
                </div>
            </section>

            <GalleryImages />
            <AboutBanner2 />
            <FAQ />

            <Footer />
        </div>
    );
};

export default GalleryPage;
