// pages/gallery.tsx
import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import GalleryImages from '../components/Gallery/GalleryImages';
import AboutBanner2 from '../components/About/AboutBanner2/AboutBanner2';


import '../app/globals.css';

const GalleryPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            <div className="max-w-[1440px] mx-auto bg-black">
                <div className="h-auto md:h-[621px] flex flex-col md:flex-row items-center px-4 md:px-24">
                    <div className="text-white text-6xl md:text-20vw font-bold font-montserrat md:w-full md:w-1/2 mb-4 md:mb-0 p-4">
                        GALLERY
                    </div>
                    <div className="flex-grow text-white text-sm md:text-base lg:text-lg font-normal font-montserrat text-justify tracking-tight p-4 md:p-0 max-h-[400px] overflow-hidden">
                        Explore the visual highlights of IEEE SRMIST SB through our gallery. View captivating images and photos that showcase our events, activities, and the vibrant community that makes our IEEE chapter unique. From technical workshops to social gatherings, our gallery provides a glimpse into the memorable moments and experiences shared by our members.
                    </div>
                </div>
            </div>

            <GalleryImages />
            <AboutBanner2 />

            <Footer />
        </div>
    );
};

export default GalleryPage;
