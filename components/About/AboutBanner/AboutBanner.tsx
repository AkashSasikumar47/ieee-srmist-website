import React from 'react';

const AboutBanner: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '1440px' }}>

            <div className="w-[1440px] h-[740px] px-[84px] py-16 flex-col justify-start items-center gap-2.5 inline-flex">
                <img className="w-[1272px] h-[612px] relative rounded-lg border border-white border-opacity-10" src="https://via.placeholder.com/1272x612" />
            </div>

        </section>
    );
};

export default AboutBanner;
