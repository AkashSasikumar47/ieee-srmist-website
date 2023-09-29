import React from 'react';

const ResourcesXplore: React.FC = () => {
    return (
        <div>
            {/* Desktop layout */}
            <section className="bg-black text-white py-16 hidden sm:block" style={{ width: '1440px' }}>
                <div className="w-[1440px] h-[249px] px-[84px] py-16 flex-col justify-center items-center gap-8 inline-flex">
                    <div className="self-stretch text-center text-white text-2xl font-semibold font-['Montserrat']">IEEE Xplore</div>
                    <div className="self-stretch text-center text-white text-base font-normal font-['Montserrat'] tracking-tight">Access IEEE Xplore, a comprehensive research database that offers a vast collection of technical articles, conference papers, and journals in various fields of engineering, technology, and science. IEEE Xplore is a valuable resource for both students and professionals looking to stay up-to-date with the latest research and developments.</div>
                </div>

                <div className="w-[1440px] h-[740px] px-[84px] py-16 flex-col justify-start items-center gap-2.5 inline-flex">
                    <div className="self-stretch h-[612px] relative rounded-lg border border-white border-opacity-10 flex-col justify-end items-end flex">
                        <img className="w-[100%] h-[100%]" src="https://via.placeholder.com/800x600" alt="IEEE Xplore" />
                        <button className="absolute bottom-0 right-0 p-4 bg-amber-500 rounded-full border border-black text-center text-black text-sm font-bold font-['Montserrat'] tracking-tight mt-4 mr-4">Access IEEE Xplore</button>
                    </div>
                </div>
            </section>

            {/* Mobile layout */}
            <section className="bg-black text-white py-8 block sm:hidden">
                <div className="w-full px-4 flex flex-col justify-center items-center">
                    <div className="text-center text-blue-500 text-l font-bold font-montserrat">IEEE Xplore</div>
                    <div className="self-stretch text-center text-white text-base font-normal font-['Montserrat'] tracking-tight mb-4">Access IEEE Xplore, a comprehensive research database that offers a vast collection of technical articles, conference papers, and journals in various fields of engineering, technology, and science. IEEE Xplore is a valuable resource for both students and professionals looking to stay up-to-date with the latest research and developments.</div>

                    <div className="w-full max-w-[512px] max-h-[400px] relative">
                        <img className="w-full h-full max-w-[512px] max-h-[400px] rounded-lg" src="https://via.placeholder.com/400x512" alt="Event" />
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

export default ResourcesXplore;
