import React from 'react';

const Testimonial: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '1440px', height: '740px' }}>

            <div className="w-[1440px] h-[740px] pt-12 pb-[392px] bg-black flex-col justify-start items-start gap-16 inline-flex">
                <div className="self-stretch h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">OUR SPONSORS</div>
                    <div className="text-center text-white text-[32px] font-bold font-['Montserrat']">Elevate Your Brand with Us: Sponsorship Opportunities</div>
                </div>
                <div className="self-stretch py-3 justify-center items-center gap-8 inline-flex">
                    <div className="w-64 h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                        <div className="grow shrink basis-0 text-white text-xs font-semibold font-['Montserrat'] underline">Visit Site</div>
                    </div>
                    <div className="w-64 h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                        <div className="grow shrink basis-0 text-white text-xs font-semibold font-['Montserrat'] underline">Visit Site</div>
                    </div>
                    <div className="w-64 h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                        <div className="grow shrink basis-0 text-white text-xs font-semibold font-['Montserrat'] underline">Visit Site</div>
                    </div>
                    <div className="w-64 h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                        <div className="grow shrink basis-0 text-white text-xs font-semibold font-['Montserrat'] underline">Visit Site</div>
                    </div>
                    <div className="w-64 h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                        <div className="grow shrink basis-0 text-white text-xs font-semibold font-['Montserrat'] underline">Visit Site</div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Testimonial;
