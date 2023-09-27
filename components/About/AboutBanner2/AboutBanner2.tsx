import React from 'react';

const AboutBanner2: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '1440px' }}>

            <div className="w-[1440px] h-[740px] px-[84px] py-16 flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="self-stretch h-[612px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-end items-center gap-3 flex">
                    <div className="p-3 justify-center items-center gap-8 inline-flex">
                        <div className="w-[280px] h-[200px] p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-end items-end gap-8 inline-flex">
                            <div className="text-center text-white text-2xl font-semibold font-['Montserrat']">DOMAINS</div>
                            <div className="px-4 py-1.5 bg-white rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-black text-sm font-semibold font-['Montserrat']">VIEW</div>
                            </div>
                        </div>
                        <div className="w-[280px] h-[200px] p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-end items-end gap-8 inline-flex">
                            <div className="text-center text-white text-2xl font-semibold font-['Montserrat']">RESOURCES</div>
                            <div className="px-4 py-1.5 bg-white rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-black text-sm font-semibold font-['Montserrat']">VIEW</div>
                            </div>
                        </div>
                        <div className="w-[280px] h-[200px] p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-end items-end gap-8 inline-flex">
                            <div className="text-center text-white text-2xl font-semibold font-['Montserrat']">MEMBERSHIP</div>
                            <div className="px-4 py-1.5 bg-white rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-black text-sm font-semibold font-['Montserrat']">VIEW</div>
                            </div>
                        </div>
                        <div className="w-[280px] h-[200px] p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-end items-end gap-8 inline-flex">
                            <div className="text-center text-white text-2xl font-semibold font-['Montserrat']">GALLERY</div>
                            <div className="px-4 py-1.5 bg-white rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-black text-sm font-semibold font-['Montserrat']">VIEW</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutBanner2;
