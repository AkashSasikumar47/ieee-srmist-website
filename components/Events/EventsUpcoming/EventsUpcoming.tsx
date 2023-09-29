import React from 'react';

const EventsUpcoming: React.FC = () => {
    return (
        <div>
            {/* Desktop layout (above 640px) */}
            <section className="bg-black text-white py-16 hidden sm:block">
                <div className="w-[1440px] h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="self-stretch text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">UPCOMING EVENT</div>
                    <div className="self-stretch text-center text-white text-3xl font-bold font-['Montserrat']">TECHNOZEST: Igniting Innovation and Celebrating Technology Excellence</div>
                </div>

                <div className="w-[1440px] h-[740px] px-[84px] py-16 flex-col justify-start items-center gap-2.5 inline-flex">
                    <div className="self-stretch h-[612px] p-4 rounded-lg border border-white border-opacity-10 flex-col justify-end items-end flex">
                        <div className="w-[200px] px-4 py-1.5 bg-lime-400 rounded justify-center items-center gap-2.5 inline-flex">
                            <div className="text-center text-black text-sm font-bold font-['Montserrat']">KNOW MORE</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile layout (below 640px) */}
            <section className="bg-black text-white py-8 block sm:hidden">
                <div className="w-full px-4 flex flex-col justify-center items-center">
                    <div className="text-center text-blue-500 text-l font-bold font-montserrat">UPCOMING EVENT</div>
                    <div className="text-center text-gray-300 text-2xl font-bold font-montserrat mb-4">TECHNOZEST: Igniting Innovation and Celebrating Technology Excellence</div>

                    <div className="w-full max-w-[400px] max-h-[512px] relative">
                        <img className="w-full h-full max-w-[400px] max-h-[512px] rounded-lg" src="https://via.placeholder.com/400x512" alt="Event" />
                        <div className="absolute bottom-0 right-0 p-3">
                            <div className="w-[200px] px-4 py-1.5 bg-lime-400 rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-black text-sm font-bold font-['Montserrat']">KNOW MORE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsUpcoming;
