import React from 'react';

const AboutBanner: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '100%' }}>
            {/* Desktop Layout */}
            <div className="hidden sm:flex w-[1440px] h-[740px] px-[84px] py-16 flex-col justify-start items-center gap-2.5 inline-flex">
                <img className="w-[1272px] h-[612px] relative rounded-lg border border-white border-opacity-10" src="https://via.placeholder.com/1272x612" alt="Desktop Banner" />
            </div>

            {/* Mobile Layout (below 640px) */}
            <div className="sm:hidden w-full px-4">
                <img className="w-full max-w-screen-md mx-auto relative rounded-lg border border-white border-opacity-10" src="https://via.placeholder.com/640x320" alt="Mobile Banner" />
            </div>
        </section>
    );
};

export default AboutBanner;
