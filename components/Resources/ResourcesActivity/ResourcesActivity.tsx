import React from 'react';

const ResourcesActivity: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '1440px' }}>

            <div className="w-[1440px] h-[1162px] px-[84px] py-16 flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="self-stretch h-[512px] rounded-lg justify-start items-center inline-flex">
                    <img className="w-[636px] h-[512px] relative" src="https://via.placeholder.com/636x512" />
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
                    <img className="w-[636px] h-[512px] relative" src="https://via.placeholder.com/636x512" />
                </div>
            </div>

        </section>
    );
};

export default ResourcesActivity;
