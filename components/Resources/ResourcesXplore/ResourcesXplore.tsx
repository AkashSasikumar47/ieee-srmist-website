import React from 'react';

const ResourcesXplore: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '1440px' }}>

            <div className="w-[1440px] h-[249px] px-[84px] py-16 flex-col justify-center items-center gap-8 inline-flex">
                <div className="self-stretch text-center text-white text-2xl font-semibold font-['Montserrat']">IEEE Xplore</div>
                <div className="self-stretch text-center text-white text-base font-normal font-['Montserrat'] tracking-tight">Access IEEE Xplore, a comprehensive research database that offers a vast collection of technical articles, conference papers, and journals in various fields of engineering, technology, and science. IEEE Xplore is a valuable resource for both students and professionals looking to stay up-to-date with the latest research and developments.</div>
            </div>

            <div className="w-[1440px] h-[740px] px-[84px] py-16 flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="self-stretch h-[612px] p-4 rounded-lg border border-white border-opacity-10 flex-col justify-end items-end flex">
                    <div className="w-[200px] px-4 py-1.5 bg-amber-500 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-center text-black text-sm font-bold font-['Montserrat']">Access IEEE Xplore</div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ResourcesXplore;
