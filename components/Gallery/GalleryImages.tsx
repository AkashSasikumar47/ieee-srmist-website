import React from 'react';
import GalleryImage from "./Image";

const GalleryImages: React.FC = () => {

    const images = [];
    for (let index = 1; index <= 12; index++) {
        images.push(
            <GalleryImage key={index} imageUrl={`/assets/images/${index}.jpg`} />
        );
    }

    return (
        <div className="max-w-[1440px] mx-auto text-white">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-wrap justify-center">
                {images}
            </div>
        </div>
    );
};

export default GalleryImages;
