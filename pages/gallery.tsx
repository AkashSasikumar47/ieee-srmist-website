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

            <div className="max-w-[1440px] mx-auto h-[621px] bg-black flex flex-row items-center px-24">
                <div className="text-white text-8xl font-bold font-montserrat">GALLERY</div>
                <div className="flex-grow text-white text-base text-lg font-normal font-montserrat text-justify tracking-tight pl-40">
                Explore the visual highlights of IEEE SRMIST SB through our gallery. View captivating images and photos that showcase our events, activities, and the vibrant community that makes our IEEE chapter unique. From technical workshops to social gatherings, our gallery provides a glimpse into the memorable moments and experiences shared by our members.
                </div>
            </div>

            <GalleryImages />
            <AboutBanner2 />


            <Footer />
        </div>
    );
};

export default GalleryPage;
