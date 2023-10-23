import * as React from 'react';

const GalleryImage: React.FC = () => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-5">
            <div className="relative" style={{ paddingBottom: '125%' }}>
                <img className="absolute inset-0 w-full h-full object-cover border-8 border-white" src="https://via.placeholder.com/400x500" />
            </div>
        </div>
    )
}

export default GalleryImage;