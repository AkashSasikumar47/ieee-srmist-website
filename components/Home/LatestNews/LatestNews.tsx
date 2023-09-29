import React from 'react';

const LatestNews: React.FC = () => {
    return (
        <div>
            {/* Desktop layout */}
            <section className="bg-black text-white py-16 hidden sm:block">
                <div className="w-[1440px] h-[328px] px-[84px] py-16 justify-center items-center gap-4 inline-flex">
                    <div className="grow shrink basis-0 text-center text-white text-2xl font-semibold font-['Montserrat']">Latest News</div>
                    <div className="w-[400px] h-[200px] p-3 rounded-lg flex-col justify-start items-start inline-flex">
                        <div className="self-stretch text-white text-base font-semibold font-['Montserrat'] mb-2">IEEE Student Paper Competition Winners Announced</div>
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat'] mb-2">August 28, 2023</div>
                        <div className="self-stretch" style={{ color: 'white', fontSize: '1rem', fontWeight: 'normal', fontFamily: 'Montserrat' }}>
                            We're thrilled to announce the winners of this year's IEEE Student Paper Competition. Congratulations to [Student Name] for their outstanding research on [Topic]. Their innovative work impressed the judging panel and earned them the top prize. Check out their winning paper <span style={{ textDecoration: 'underline' }}>here</span>.
                        </div>
                    </div>
                    <div className="w-[400px] h-[200px] p-3 rounded-lg flex-col justify-start items-start inline-flex">
                        <div className="self-stretch text-white text-base font-semibold font-['Montserrat'] mb-2">IEEE SRMIST SB Hosts Successful Webinar on AI Trends</div>
                        <div className="self-stretch text-white text-sm font-normal font-['Montserrat'] mb-2">September 15, 2023</div>
                        <div className="self-stretch" style={{ color: 'white', fontSize: '1rem', fontWeight: 'normal', fontFamily: 'Montserrat' }}>
                            We're excited to share that our recent webinar on "Emerging Trends in Artificial Intelligence" was a resounding success! Over 200 participants joined us to delve into the latest advancements in AI and its real-world applications. Stay tuned for more insightful webinars in the coming months.
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile layout (below 640px) */}
            <section className="bg-black text-white py-8 block sm:hidden">
                <div className="w-full px-4 flex flex-col justify-center items-center">
                    <div className="text-center text-gray-300 text-2xl font-bold font-montserrat mb-4">Latest News</div>

                    {/* News Card 1 */}
                    <div className="w-full max-w-[400px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-start items-start gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-semibold font-['Montserrat']">IEEE Student Paper Competition Winners Announced</div>
                        <div className="text-white text-sm font-normal font-['Montserrat']">August 28, 2023</div>
                        <div className="text-white text-base font-normal font-['Montserrat']">
                            We're thrilled to announce the winners of this year's IEEE Student Paper Competition. Congratulations to [Student Name] for their outstanding research on [Topic]. Their innovative work impressed the judging panel and earned them the top prize. Check out their winning paper <span style={{ textDecoration: 'underline' }}>here</span>.
                        </div>
                    </div>

                    {/* News Card 2 */}
                    <div className="w-full max-w-[400px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-start items-start gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-semibold font-['Montserrat']">IEEE SRMIST SB Hosts Successful Webinar on AI Trends</div>
                        <div className="text-white text-sm font-normal font-['Montserrat']">September 15, 2023</div>
                        <div className="text-white text-base font-normal font-['Montserrat']">
                            We're excited to share that our recent webinar on "Emerging Trends in Artificial Intelligence" was a resounding success! Over 200 participants joined us to delve into the latest advancements in AI and its real-world applications. Stay tuned for more insightful webinars in the coming months.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LatestNews;
