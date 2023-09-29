import React from 'react';

const DomainSocietyPage: React.FC = () => {
    return (
        <div>
            {/* Desktop layout */}
            <section className="bg-black text-white py-16 hidden sm:block" style={{ width: '1440px' }}>
                <div className="w-[1440px] h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="self-stretch text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">OUR SOCIETIES</div>
                    <div className="self-stretch text-center text-white text-[32px] font-bold font-['Montserrat']">Unveiling Our Diverse Community</div>
                </div>

                <div className="w-[1440px] h-[640px] px-[84px] py-16 flex-col justify-start items-center gap-8 inline-flex">
                    <div className="w-[400px] h-[512px] rounded-lg border border-white border-opacity-10 flex-col justify-center items-start inline-flex">
                        <img className="w-[400px] h-80 relative" src="https://via.placeholder.com/400x320" alt="Society 1" />
                        <div className="w-[400px] h-48 px-3 py-8 flex-col justify-between items-center inline-flex">
                            <div className="self-stretch text-center text-white text-base font-semibold font-['Montserrat']">Power Electronics Society</div>
                            <div className="self-stretch justify-between items-start inline-flex">
                                <div className="grow shrink basis-0 self-stretch justify-start items-center gap-3 flex">
                                    <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" alt="Head" />
                                    <div className="grow shrink basis-0 text-white text-[10px] font-medium font-['Montserrat'] tracking-tight">Head - Name 123</div>
                                </div>
                                <div className="grow shrink basis-0 self-stretch justify-start items-center gap-3 flex">
                                    <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" alt="Secretary" />
                                    <div className="grow shrink basis-0 text-white text-[10px] font-medium font-['Montserrat'] tracking-tight">Secretary - Name 123</div>
                                </div>
                            </div>
                            <button className="self-stretch text-center text-lime-500 text-sm font-semibold font-['Montserrat'] border border-lime-500 rounded-full px-4 py-1.5 mt-4">Read More</button>
                        </div>
                    </div>
                    {/* Add more society cards here */}
                </div>
            </section>

            {/* Mobile layout */}
            <section className="bg-black text-white py-8 block sm:hidden">
                <div className="w-full px-4">
                    <div className="text-center text-blue-500 text-l font-bold font-montserrat mb-2">OUR SOCIETIES</div>
                    <div className="text-center text-gray-300 text-2xl font-bold font-montserrat mb-4">Unveiling Our Diverse Community</div>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Repeat this block for each section */}
                    <div className="w-full px-4">
                        <img className="w-full h-auto mb-4" src="https://via.placeholder.com/636x512" alt="Domain 1" />
                        <div className="text-white text-2xl font-bold font-['Montserrat'] mb-4">Research & Development</div>
                        <div className="text-white text-base font-normal font-['Montserrat'] tracking-tight mb-4">Craft digital experiences that drive innovation. Your code can transform the way we interact with technology.</div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Head 1" />
                                <div className="text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">Head - Name 123</div>
                            </div>
                        </div>
                        <div className="border border-lime-500 rounded-full inline-flex mt-4">
                            <button className="text-lime-500 text-sm font-semibold font-['Montserrat'] px-2 py-1">View More</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default DomainSocietyPage;
