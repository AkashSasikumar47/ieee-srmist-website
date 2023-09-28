// PopularEvents.tsx
import React from 'react';

const PopularEvents: React.FC = () => {
    return (
        <div>
            {/* Desktop layout */}
            <section className="bg-black text-white py-16 hidden sm:block">
                <div className="w-[1440px] h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="self-stretch text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">OUR EVENTS</div>
                    <div className="self-stretch text-center text-white text-3xl font-bold font-['Montserrat']">Our efforts to share our knowledge with you.</div>
                </div>

                <div className="w-[1440px] h-[640px] px-[84px] py-16 justify-center items-start gap-8 inline-flex">
                    {/* Event card */}
                    <div className="w-[400px] h-[512px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-between items-center inline-flex">
                        <img className="w-[376px] h-[368px] relative rounded-lg" src="https://via.placeholder.com/376x368" alt="Event" />
                        <div className="self-stretch text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">TECHNOZEST</div>
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">28-12-2023</div>
                        <div className="self-stretch text-zinc-300 text-base font-normal font-['Montserrat'] tracking-tight">Encounter your canon event across the Techno verse</div>
                        <div className="self-stretch text-white text-xs font-semibold font-['Montserrat'] underline">View More</div>
                    </div>
                    {/* Additional event cards */}
                    {/* (Repeat the card structure for additional events) */}
                </div>
            </section>

            {/* Mobile layout */}
            <section className="bg-black text-white py-8 block sm:hidden">
                <div className="max-w-screen-xl mx-auto px-4 text-center">
                    <div className="text-l font-bold font-montserrat">OUR EVENTS</div>
                    <div className="mt-4">
                        <p className="text-2xl font-semibold font-montserrat">Our efforts to share our knowledge with you.</p>
                    </div>
                </div>

                <div className="max-w-screen-xl mx-auto px-4 py-8 text-left">
                    {/* Event card */}
                    <div className="w-full max-w-[400px] max-h-[512px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-between items-center inline-flex mb-8">
                        <img className="w-full h-auto max-w-[400px] max-h-[368px] relative rounded-lg" src="https://via.placeholder.com/400x512" alt="Event" />
                        <div className="self-stretch text-white text-base font-extrabold font-['Montserrat'] tracking-tight mt-2">TECHNOZEST</div>
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">28-12-2023</div>
                        <div className="self-stretch text-zinc-300 text-sm font-normal font-['Montserrat'] tracking-tight">Encounter your canon event across the Techno verse</div>
                        <div className="self-stretch text-white text-xs font-semibold font-['Montserrat'] underline">View More</div>
                    </div>
                    <div className="w-full max-w-[400px] max-h-[512px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-between items-center inline-flex mb-8">
                        <img className="w-full h-auto max-w-[400px] max-h-[368px] relative rounded-lg" src="https://via.placeholder.com/400x512" alt="Event" />
                        <div className="self-stretch text-white text-base font-extrabold font-['Montserrat'] tracking-tight mt-2">TECHNOZEST</div>
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">28-12-2023</div>
                        <div className="self-stretch text-zinc-300 text-sm font-normal font-['Montserrat'] tracking-tight">Encounter your canon event across the Techno verse</div>
                        <div className="self-stretch text-white text-xs font-semibold font-['Montserrat'] underline">View More</div>
                    </div>
                    <div className="w-full max-w-[400px] max-h-[512px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-between items-center inline-flex mb-8">
                        <img className="w-full h-auto max-w-[400px] max-h-[368px] relative rounded-lg" src="https://via.placeholder.com/400x512" alt="Event" />
                        <div className="self-stretch text-white text-base font-extrabold font-['Montserrat'] tracking-tight mt-2">TECHNOZEST</div>
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">28-12-2023</div>
                        <div className="self-stretch text-zinc-300 text-sm font-normal font-['Montserrat'] tracking-tight">Encounter your canon event across the Techno verse</div>
                        <div className="self-stretch text-white text-xs font-semibold font-['Montserrat'] underline">View More</div>
                    </div>
                    <div className="w-full max-w-[400px] max-h-[512px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-between items-center inline-flex mb-8">
                        <img className="w-full h-auto max-w-[400px] max-h-[368px] relative rounded-lg" src="https://via.placeholder.com/400x512" alt="Event" />
                        <div className="self-stretch text-white text-base font-extrabold font-['Montserrat'] tracking-tight mt-2">TECHNOZEST</div>
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">28-12-2023</div>
                        <div className="self-stretch text-zinc-300 text-sm font-normal font-['Montserrat'] tracking-tight">Encounter your canon event across the Techno verse</div>
                        <div className="self-stretch text-white text-xs font-semibold font-['Montserrat'] underline">View More</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PopularEvents;
