import React from 'react';

const FeaturedActivities: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ maxWidth: '1440px' }}>
            {/* Desktop Layout */}
            <div className="hidden sm:flex w-[1440px] h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">FEATURED ACTIVITIES</div>
                <div className="self-stretch text-center text-white text-[32px] font-bold font-['Montserrat']">Explore Our Exciting Events and Initiatives</div>
            </div>

            <div className="hidden sm:flex w-[1440px] h-[640px] px-[84px] py-16 flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="self-stretch h-[400px] border-r-2 border-white justify-start items-center inline-flex">
                    <img className="w-[512px] h-[400px] relative" src="https://via.placeholder.com/400x320" alt="Event Image" />
                    <div className="grow shrink basis-0 self-stretch px-[54px] py-16 flex-col justify-start items-start gap-8 inline-flex">
                        <div className="self-stretch text-white text-[32px] font-bold font-['Montserrat']">Women in STEM Panel Discussion</div>
                        <div className="self-stretch text-white text-base font-normal font-['Montserrat'] tracking-tight">March 8, 2023</div>
                        <div className="self-stretch">
                            <span style={{ color: 'white', fontSize: '1rem', fontWeight: 'normal', fontFamily: 'Montserrat', lineHeight: '1.5' }}>
                                To celebrate International Women's Day, we organized a panel discussion featuring accomplished women in STEM fields. The event focused on empowering women in technology and fostering diversity. Missed it? Watch the recording <span style={{ textDecoration: 'underline' }}>here</span>.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout (below 640px) */}
            <div className="sm:hidden w-full px-4">
                <div className="text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">FEATURED ACTIVITIES</div>
            </div>

            <div className="sm:hidden w-full max-w-screen-md mx-auto px-4 py-4">
                {/* Event Card */}
                <div className="w-full max-w-[400px] p-3 border-b-2 border-white flex-col text-left items-left gap-4 inline-flex mb-8">
                    <img className="w-[320px] h-[256px] relative" src="https://via.placeholder.com/320x256" alt="Event Image" />
                    <div className="text-white text-[32px] font-bold font-['Montserrat']">Women in STEM Panel Discussion</div>
                    <div className="text-white text-base font-normal font-['Montserrat']">March 8, 2023</div>
                    <div className="text-white text-base font-normal font-['Montserrat'] mb-8">
                        To celebrate International Women's Day, we organized a panel discussion featuring accomplished women in STEM fields. The event focused on empowering women in technology and fostering diversity. Missed it? Watch the recording <span style={{ textDecoration: 'underline' }}>here</span>.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedActivities;
