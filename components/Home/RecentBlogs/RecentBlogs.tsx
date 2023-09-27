// RecentBlogs.tsx
import React from 'react';

const RecentBlogs: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '1440px', height: '740px' }}>

            <div className="w-[1440px] h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">RECENT BLOGS</div>
                <div className="self-stretch text-center text-white text-[32px] font-bold font-['Montserrat']">Celebrating Knowledge and Insights: Our Blogosphere</div>
            </div>

            <div className="w-[1440px] h-[640px] px-[84px] py-16 justify-center items-start gap-8 inline-flex">
                <div className="w-[400px] h-[512px] rounded-lg border border-white border-opacity-10 flex-col justify-center items-start inline-flex">
                    <img className="w-[400px] h-80 relative" src="https://via.placeholder.com/400x320" />
                    <div className="w-[400px] h-48 p-3 flex-col justify-start items-start gap-3 inline-flex">
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">JAN 28, 2023</div>
                        <div className="self-stretch text-white text-2xl font-semibold font-['Montserrat']">2023 Tech Forecast: A Deep Dive into Emerging Trends</div>
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">By Lionel Messi</div>
                        <div className="self-stretch text-white text-xs font-semibold font-['Montserrat'] underline">Read More</div>
                    </div>
                </div>
                <div className="w-[400px] h-[512px] rounded-lg border border-white border-opacity-10 flex-col justify-center items-start inline-flex">
                    <img className="w-[400px] h-80 relative" src="https://via.placeholder.com/400x320" />
                    <div className="w-[400px] h-48 p-3 flex-col justify-start items-start gap-3 inline-flex">
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">JAN 28, 2023</div>
                        <div className="self-stretch text-white text-2xl font-semibold font-['Montserrat']">Tech Titans: Companies Leading the Charge in 2023's Trends</div>
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">Navigating the Frontier: Latest Technology Trends in 2023</div>
                        <div className="self-stretch text-white text-xs font-semibold font-['Montserrat'] underline">Read More</div>
                    </div>
                </div>
                <div className="w-[400px] h-[512px] rounded-lg border border-white border-opacity-10 flex-col justify-center items-start inline-flex">
                    <img className="w-[400px] h-80 relative" src="https://via.placeholder.com/400x320" />
                    <div className="w-[400px] h-48 p-3 flex-col justify-start items-start gap-3 inline-flex">
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">JAN 28, 2023</div>
                        <div className="self-stretch text-white text-2xl font-semibold font-['Montserrat']">The Future Unveiled: Top Technology Trends for 2023</div>
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">Building Tomorrow's Innovators: The Power of STEM Education</div>
                        <div className="self-stretch text-white text-xs font-semibold font-['Montserrat'] underline">Read More</div>
                    </div>
                </div>
                <div className="w-[400px] h-[512px] rounded-lg border border-white border-opacity-10 flex-col justify-center items-start inline-flex">
                    <img className="w-[400px] h-80 relative" src="https://via.placeholder.com/400x320" />
                    <div className="w-[400px] h-48 p-3 flex-col justify-start items-start gap-3 inline-flex">
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">JAN 28, 2023</div>
                        <div className="self-stretch text-white text-2xl font-semibold font-['Montserrat']">From AI to Blockchain: Exploring the Cutting-Edge Tech of 2023</div>
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat']">Connecting and Collaborating: Highlights from IEEE Events and Chapters</div>
                        <div className="self-stretch text-white text-xs font-semibold font-['Montserrat'] underline">Read More</div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default RecentBlogs;
