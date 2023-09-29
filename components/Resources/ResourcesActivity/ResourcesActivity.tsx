import React from 'react';

const ResourcesActivity: React.FC = () => {
    return (
        <div>
            {/* Desktop layout */}
            <section className="bg-black text-white py-16 hidden sm:block">
                <div className="w-[1440px] h-[1162px] px-[84px] py-16 flex-col justify-start items-center gap-2.5 inline-flex">
                    <div className="self-stretch h-[512px] rounded-lg justify-start items-center inline-flex">
                        <img className="w-[636px] h-[512px] relative" src="https://via.placeholder.com/636x512" alt="Career Guidance" />
                        <div className="grow shrink basis-0 self-stretch px-[54px] py-16 flex-col justify-center items-start gap-8 inline-flex">
                            <div className="self-stretch text-white text-[32px] font-bold font-['Montserrat']">Career Guidance</div>
                            <div className="self-stretch text-white text-base font-normal font-['Montserrat'] tracking-tight">Navigate your career path with IEEE's career development resources. Whether you're a student exploring potential career options or a professional looking to enhance your skills, you'll find valuable guidance, webinars, and articles to help you achieve your career goals.</div>
                            <div className="px-4 py-1.5 bg-white rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-black text-sm font-semibold font-['Montserrat']">View More</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[512px] rounded-lg justify-start items-center inline-flex">
                        <div className="grow shrink basis-0 self-stretch px-[54px] py-16 flex-col justify-center items-start gap-8 inline-flex">
                            <div className="self-stretch text-white text-[32px] font-bold font-['Montserrat']">Industry Standards</div>
                            <div className="self-stretch text-white text-base font-normal font-['Montserrat'] tracking-tight">Access IEEE's collection of industry standards and guidelines, ensuring that your projects and research align with the best practices in your field. These standards cover a wide range of technical areas, from telecommunications to electrical safety.</div>
                            <div className="px-4 py-1.5 bg-white rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-black text-sm font-semibold font-['Montserrat']">View More</div>
                            </div>
                        </div>
                        <img className="w-[636px] h-[512px] relative" src="https://via.placeholder.com/636x512" alt="Industry Standards" />
                    </div>
                </div>
            </section>

            {/* Mobile layout */}
            <section className="bg-black text-white py-8 block sm:hidden">
                <div className="w-full px-4">
                    <div className="text-center text-blue-500 text-l font-bold font-montserrat">Resources Activity</div>
                </div>

                <div className="max-w-screen-md mx-auto px-4 py-4 flex flex-col items-center">
                    <div className="w-full max-w-[400px] rounded-lg overflow-hidden flex-col justify-start items-start inline-flex mx-auto bg-white mb-4">
                        <img className="w-full h-[200px] relative" src="https://via.placeholder.com/636x512" alt="Career Guidance" />
                        <div className="w-full p-4 flex-col justify-start items-start gap-2 inline-flex mt-2">
                            <div className="text-zinc-300 text-xs font-semibold font-['Montserrat']">Career Guidance</div>
                            <div className="text-black text-base font-normal font-['Montserrat'] tracking-tight">Navigate your career path with IEEE's career development resources. Whether you're a student exploring potential career options or a professional looking to enhance your skills, you'll find valuable guidance, webinars, and articles to help you achieve your career goals.</div>
                            <div className="bg-white rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-black text-sm font-semibold font-['Montserrat']">View More</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[400px] rounded-lg overflow-hidden flex-col justify-start items-start inline-flex mx-auto bg-white mb-4">
                        <img className="w-full h-[200px] relative" src="https://via.placeholder.com/636x512" alt="Industry Standards" />
                        <div className="w-full p-4 flex-col justify-start items-start gap-2 inline-flex mt-2">
                            <div className="text-zinc-300 text-xs font-semibold font-['Montserrat']">Industry Standards</div>
                            <div className="text-black text-base font-normal font-['Montserrat'] tracking-tight">Access IEEE's collection of industry standards and guidelines, ensuring that your projects and research align with the best practices in your field. These standards cover a wide range of technical areas, from telecommunications to electrical safety.</div>
                            <div className="bg-white rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-black text-sm font-semibold font-['Montserrat']">View More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResourcesActivity;
