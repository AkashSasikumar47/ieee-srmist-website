import React from 'react';
import GalleryImage from "./Image";

const GalleryImages: React.FC = () => {
    return (
        <div className="max-w-[1440px] mx-auto text-white">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-wrap justify-center">
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
            </div>
        </div>
    );
};

export default GalleryImages;
