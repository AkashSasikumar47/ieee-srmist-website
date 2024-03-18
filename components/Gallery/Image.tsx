import * as React from 'react';

interface GalleryImageProps {
    imageUrl: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ imageUrl }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-5">
            <div className="relative" style={{ paddingBottom: '125%' }}>
                <img
                    className={`absolute inset-0 w-full h-full object-cover border-8 ${
                        isHovered ? 'border-blue-500' : 'border-white'
                    }`}
                    src={imageUrl}
                    alt='no img'
                    style={{
                        borderRadius: '8px',
                        filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                        scale: isHovered ? '1.1' : '1',
                        transition: 'filter 0.5s, border-color 0.5s, scale 0.5s',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </div>
        </div>
    );
};

export default GalleryImage;
