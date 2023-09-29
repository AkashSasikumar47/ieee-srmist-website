import React from 'react';

const RecentBlogs: React.FC = () => {
    return (
        <div>
            {/* Desktop layout */}
            <section className="bg-black text-white py-16 hidden sm:block">
                <div className="w-[1440px] h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="self-stretch text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">RECENT BLOGS</div>
                    <div className="self-stretch text-center text-white text-3xl font-bold font-['Montserrat']">Celebrating Knowledge and Insights: Our Blogosphere</div>
                </div>

                <div className="w-[1440px] h-[640px] px-[84px] py-16 justify-center items-start gap-8 inline-flex">
                    <div className="w-[400px] h-[512px] rounded-lg flex-col justify-center items-start inline-flex">
                        <img className="w-[400px] h-80 relative" src="https://via.placeholder.com/400x320" alt="Blog 1" />
                        <div className="w-[400px] h-48 flex-col justify-start items-start gap-2 inline-flex mt-4">
                            <div className="text-zinc-300 text-xs font-semibold font-['Montserrat']">JAN 28, 2023</div>
                            <div className="text-white text-xl font-semibold font-['Montserrat']">2023 Tech Forecast: A Deep Dive into Emerging Trends</div>
                            <div className="text-zinc-300 text-xs font-semibold font-['Montserrat']">By Lionel Messi</div>
                            <div className="text-lime-400 text-xs font-semibold font-['Montserrat'] underline">Read More</div>
                        </div>
                    </div>
                    <div className="w-[400px] h-[512px] rounded-lg flex-col justify-center items-start inline-flex">
                        <img className="w-[400px] h-80 relative" src="https://via.placeholder.com/400x320" alt="Blog 1" />
                        <div className="w-[400px] h-48 flex-col justify-start items-start gap-2 inline-flex mt-4">
                            <div className="text-zinc-300 text-xs font-semibold font-['Montserrat']">JAN 28, 2023</div>
                            <div className="text-white text-xl font-semibold font-['Montserrat']">2023 Tech Forecast: A Deep Dive into Emerging Trends</div>
                            <div className="text-zinc-300 text-xs font-semibold font-['Montserrat']">By Lionel Messi</div>
                            <div className="text-lime-400 text-xs font-semibold font-['Montserrat'] underline">Read More</div>
                        </div>
                    </div>
                    <div className="w-[400px] h-[512px] rounded-lg flex-col justify-center items-start inline-flex">
                        <img className="w-[400px] h-80 relative" src="https://via.placeholder.com/400x320" alt="Blog 1" />
                        <div className="w-[400px] h-48 flex-col justify-start items-start gap-2 inline-flex mt-4">
                            <div className="text-zinc-300 text-xs font-semibold font-['Montserrat']">JAN 28, 2023</div>
                            <div className="text-white text-xl font-semibold font-['Montserrat']">2023 Tech Forecast: A Deep Dive into Emerging Trends</div>
                            <div className="text-zinc-300 text-xs font-semibold font-['Montserrat']">By Lionel Messi</div>
                            <div className="text-lime-400 text-xs font-semibold font-['Montserrat'] underline">Read More</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile layout */}
            <section className="bg-black text-white py-8 block sm:hidden">
                <div className="w-full px-4">
                    <div className="text-center text-blue-500 text-l font-bold font-montserrat">RECENT BLOGS</div>
                    <div className="text-center text-gray-300 text-2xl font-bold font-montserrat mb-4">Celebrating Knowledge and Insights: Our Blogosphere</div>
                </div>

                <div className="max-w-screen-md mx-auto px-4 py-4 flex flex-col items-center">
                    {/* Display only 3 cards on mobile */}
                    <div className="w-full max-w-[400px] rounded-lg flex-col justify-center items-start inline-flex mx-auto p-4 mb-4">
                        <img className="w-full h-80 relative" src="https://via.placeholder.com/400x320" alt="Blog 1" />
                        <div className="w-full h-48 flex-col justify-start items-start gap-2 inline-flex mt-4">
                            <div className="text-zinc-300 text-xs font-semibold font-['Montserrat']">JAN 28, 2023</div>
                            <div className="text-white text-2xl font-semibold font-['Montserrat']">2023 Tech Forecast: A Deep Dive into Emerging Trends</div>
                            <div className="text-zinc-300 text-xs font-semibold font-['Montserrat']">By Lionel Messi</div>
                            <div className="text-lime-400 text-xs font-semibold font-['Montserrat'] underline">Read More</div>
                        </div>
                    </div>
                    <div className="w-full max-w-[400px] rounded-lg flex-col justify-center items-start inline-flex mx-auto p-4 mb-4">
                        <img className="w-full h-80 relative" src="https://via.placeholder.com/400x320" alt="Blog 1" />
                        <div className="w-full h-48 flex-col justify-start items-start gap-2 inline-flex mt-4">
                            <div className="text-zinc-300 text-xs font-semibold font-['Montserrat']">JAN 28, 2023</div>
                            <div className="text-white text-2xl font-semibold font-['Montserrat']">2023 Tech Forecast: A Deep Dive into Emerging Trends</div>
                            <div className="text-zinc-300 text-xs font-semibold font-['Montserrat']">By Lionel Messi</div>
                            <div className="text-lime-400 text-xs font-semibold font-['Montserrat'] underline">Read More</div>
                        </div>
                    </div>
                    <div className="w-full max-w-[400px] rounded-lg flex-col justify-center items-start inline-flex mx-auto p-4 mb-4">
                        <img className="w-full h-80 relative" src="https://via.placeholder.com/400x320" alt="Blog 1" />
                        <div className="w-full h-48 flex-col justify-start items-start gap-2 inline-flex mt-4">
                            <div className="text-zinc-300 text-xs font-semibold font-['Montserrat']">JAN 28, 2023</div>
                            <div className="text-white text-2xl font-semibold font-['Montserrat']">2023 Tech Forecast: A Deep Dive into Emerging Trends</div>
                            <div className="text-zinc-300 text-xs font-semibold font-['Montserrat']">By Lionel Messi</div>
                            <div className="text-lime-400 text-xs font-semibold font-['Montserrat'] underline">Read More</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RecentBlogs;
