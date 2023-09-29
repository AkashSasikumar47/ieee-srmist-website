import React from 'react';

const AboutTeam: React.FC = () => {
    return (
        <div>
            {/* Desktop layout (above 640px) */}
            <section className="bg-black text-white py-16 hidden sm:block">
                <div className="w-[1440px] h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="self-stretch text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">OUR TEAM</div>
                    <div className="self-stretch text-center text-white text-[32px] font-bold font-['Montserrat']">The Collective Genius Behind Our Vision</div>
                </div>
            </section>

            {/* Mobile layout (below 640px) */}
            <section className="bg-black text-white py-8 block sm:hidden">
                <div className="w-full px-4">
                    <div className="text-center text-blue-500 text-l font-bold font-montserrat">OUR TEAM</div>
                    <div className="text-center text-gray-300 text-2xl font-bold font-montserrat mb-4">The Collective Genius Behind Our Vision</div>
                </div>
            </section>
        </div>
    );
};

export default AboutTeam;