import React from 'react';

const AboutIeee: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '1440px', height: '740px' }}>

            <div className="w-[1440px] h-[740px] pt-12 pb-8 bg-black flex-col justify-end items-start gap-16 inline-flex">
                <div className="self-stretch h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">ABOUT US</div>
                    <div className="text-center text-white text-[32px] font-bold font-['Montserrat']">Innovate. Edify. Ecperience. Excel</div>
                </div>
                <div className="self-stretch h-[512px] px-[84px] py-4 flex-col justify-between items-start inline-flex">
                    <div className="w-[1272px] pt-60 rounded-lg border border-stone-500 justify-center items-center inline-flex">
                        <div className="grow shrink basis-0 self-stretch px-8 py-4 justify-center items-center gap-4 inline-flex">
                            <div className="w-[290px] pl-[171px] pr-3 pt-[159px] pb-3 bg-stone-500 rounded-lg justify-end items-center flex">
                                <div className="px-4 py-1.5 bg-black rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-center text-white text-sm font-medium font-['Montserrat']">View More</div>
                                </div>
                            </div>
                            <div className="w-[290px] pl-[171px] pr-3 pt-[159px] pb-3 bg-stone-500 rounded-lg justify-end items-center flex">
                                <div className="px-4 py-1.5 bg-black rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-center text-white text-sm font-medium font-['Montserrat']">View More</div>
                                </div>
                            </div>
                            <div className="w-[290px] pl-[171px] pr-3 pt-[159px] pb-3 bg-stone-500 rounded-lg justify-end items-center flex">
                                <div className="px-4 py-1.5 bg-black rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-center text-white text-sm font-medium font-['Montserrat']">View More</div>
                                </div>
                            </div>
                            <div className="w-[290px] pl-[171px] pr-3 pt-[159px] pb-3 bg-stone-500 rounded-lg justify-end items-center flex">
                                <div className="px-4 py-1.5 bg-black rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-center text-white text-sm font-medium font-['Montserrat']">View More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutIeee;
