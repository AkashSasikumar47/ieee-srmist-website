import React from 'react';

const ResourcesPaper: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '1440px' }}>

            <div className="w-[1440px] h-[229px] px-[84px] py-16 flex-col justify-center items-center gap-8 inline-flex">
                <div className="self-stretch text-center text-white text-2xl font-semibold font-['Montserrat']">Research Papers and Journals</div>
                <div className="self-stretch text-center text-white text-base font-normal font-['Montserrat'] tracking-tight">Discover a wide range of research papers and journals published by IEEE and its members. From cutting-edge advancements in artificial intelligence to sustainable energy solutions, these publications provide insights into the latest innovations and breakthroughs.</div>
            </div>

            <div className="w-[1440px] h-[640px] px-[84px] py-16 justify-center items-start gap-8 inline-flex">
                <div className="w-[400px] h-[512px] rounded-lg border border-white border-opacity-10 flex-col justify-start items-start inline-flex">
                    <img className="w-[400px] h-[396px] relative" src="https://via.placeholder.com/400x396" />
                    <div className="self-stretch grow shrink basis-0 p-3 flex-col justify-between items-start flex">
                        <div className="self-stretch text-white text-base font-semibold font-['Montserrat']">Multi-Magnification Attention Convolutional Neural Networks [AI-eXplained]</div>
                        <div className="self-stretch text-white text-xs font-semibold font-['Montserrat'] underline">Read More</div>
                    </div>
                </div>
                <div className="w-[400px] h-[512px] rounded-lg border border-white border-opacity-10 flex-col justify-start items-start inline-flex">
                    <img className="w-[400px] h-[396px] relative" src="https://via.placeholder.com/400x396" />
                    <div className="self-stretch grow shrink basis-0 p-3 flex-col justify-between items-start flex">
                        <div className="self-stretch text-white text-base font-semibold font-['Montserrat']">Radar-Based Monitoring of Vital Signs: A Tutorial Overview</div>
                        <div className="self-stretch text-white text-xs font-semibold font-['Montserrat'] underline">Read More</div>
                    </div>
                </div>
                <div className="w-[400px] h-[512px] rounded-lg border border-white border-opacity-10 flex-col justify-start items-start inline-flex">
                    <img className="w-[400px] h-[396px] relative" src="https://via.placeholder.com/400x396" />
                    <div className="self-stretch grow shrink basis-0 p-3 flex-col justify-between items-start flex">
                        <div className="self-stretch text-white text-base font-semibold font-['Montserrat']">Artificial Intelligence Enabled Radio Propagation for Communications</div>
                        <div className="self-stretch text-white text-xs font-semibold font-['Montserrat'] underline">Read More</div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ResourcesPaper;
