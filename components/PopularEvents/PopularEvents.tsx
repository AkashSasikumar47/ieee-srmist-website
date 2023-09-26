// PopularEvents.tsx
import React from 'react';

const PopularEvents: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '1440px', height: '740px' }}>

            <div className="w-[1440px] h-[740px] pt-12 pb-2 bg-black flex-col justify-end items-start gap-16 inline-flex">
                <div className="self-stretch h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">POPULAR EVENTS</div>
                    <div className="text-center text-white text-[32px] font-bold font-['Montserrat']">Discover Our Exciting Events and Workshops</div>
                </div>
                <div className="self-stretch py-3 justify-center items-center gap-8 inline-flex">
                    <div className="w-[400px] h-[512px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-between items-center inline-flex">
                        <img className="w-[376px] h-[368px] relative rounded-lg" src="https://via.placeholder.com/376x368" />
                        <div className="self-stretch text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">TECHNOZEST</div>
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">28-12-2023</div>
                        <div className="self-stretch text-zinc-300 text-base font-normal font-['Montserrat'] tracking-tight">Encounter your canon event across the Techno verse</div>
                        <div className="self-stretch text-white text-xs font-semibold font-['Montserrat'] underline">View More</div>
                    </div>
                    <div className="w-[400px] h-[512px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-between items-center inline-flex">
                        <img className="w-[376px] h-[368px] relative rounded-lg" src="https://via.placeholder.com/376x368" />
                        <div className="self-stretch text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">TECHNOZEST</div>
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">28-12-2023</div>
                        <div className="self-stretch text-zinc-300 text-base font-normal font-['Montserrat'] tracking-tight">Encounter your canon event across the Techno verse</div>
                        <div className="self-stretch text-white text-xs font-semibold font-['Montserrat'] underline">View More</div>
                    </div>
                    <div className="w-[400px] h-[512px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-between items-center inline-flex">
                        <img className="w-[376px] h-[368px] relative rounded-lg" src="https://via.placeholder.com/376x368" />
                        <div className="self-stretch text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">TECHNOZEST</div>
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">28-12-2023</div>
                        <div className="self-stretch text-zinc-300 text-base font-normal font-['Montserrat'] tracking-tight">Encounter your canon event across the Techno verse</div>
                        <div className="self-stretch text-white text-xs font-semibold font-['Montserrat'] underline">View More</div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default PopularEvents;
