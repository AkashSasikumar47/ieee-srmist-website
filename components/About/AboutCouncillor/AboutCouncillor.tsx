import React from 'react';

const AboutCouncillor: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '100%' }}>
            {/* Desktop Layout */}
            <div className="hidden sm:flex w-[1440px] h-[640px] px-[84px] py-16 justify-center items-start gap-8 inline-flex">
                <div className="w-[400px] h-[512px] px-4 py-8 rounded-lg border border-white border-opacity-10 flex-col justify-center items-start gap-4 inline-flex">
                    <div className="self-stretch text-white text-[38px] font-bold font-['Montserrat']">Navigating Opportunities and Guidance: IEEE SRM and Our Branch Councillor</div>
                    <div className="self-stretch text-white text-base font-normal font-['Montserrat'] tracking-tight">IEEE SRM provides students with workshops and webinars spanning diverse fields. Here, you can publish papers, network with IEEE alumni, and collaborate on projects that make a positive impact on society while receiving guidance from our Branch Councillor.</div>
                </div>
                <img className="w-[400px] h-[512px] relative rounded-lg" src="https://via.placeholder.com/400x512" />
                <div className="w-[400px] h-[512px] px-4 py-8 rounded-lg border border-white border-opacity-10 flex-col justify-center items-start gap-4 inline-flex">
                    <div className="self-stretch text-white text-[38px] font-bold font-['Montserrat']">Kylie Jenner</div>
                    <div className="self-stretch text-white text-base font-bold font-['Montserrat']">BRANCH COUNCILLOR</div>
                    <div className="self-stretch text-white text-base font-normal font-['Montserrat'] tracking-tight">We are delighted to introduce Dr. Sarah Mitchell, our esteemed Branch Councillor at IEEE SRM. Dr. Mitchell brings a wealth of knowledge and experience to our IEEE community.<br /><br />Dr. Sarah Mitchell holds a Ph.D. in Electrical Engineering from MIT and has over 20 years of experience in the field. Her research in renewable energy systems and sustainable technologies has been published in numerous prestigious journals.<br /><br />IEEE SRM provides students with workshops and webinars spanning diverse fields. Here, you can publish papers, network with IEEE alumni, and collaborate on projects that make a positive impact on society while receiving guidance from our Branch Councillor.</div>
                </div>
            </div>

            {/* Mobile Layout (below 640px) */}
            <div className="sm:hidden w-full px-4">
                <div className="text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">Navigating Opportunities and Guidance: IEEE SRM and Our Branch Councillor</div>
                <div className="text-white text-base font-normal font-['Montserrat'] tracking-tight mt-4">IEEE SRM provides students with workshops and webinars spanning diverse fields. Here, you can publish papers, network with IEEE alumni, and collaborate on projects that make a positive impact on society while receiving guidance from our Branch Councillor.</div>
                <img className="w-full h-[512px] object-cover rounded-lg mt-8" src="https://via.placeholder.com/400x512" alt="Kylie Jenner" />                <div className="text-center text-white text-[38px] font-bold font-['Montserrat'] mt-4">Kylie Jenner</div>
                <div className="text-center text-white text-base font-bold font-['Montserrat'] mb-8">BRANCH COUNCILLOR</div>
                <div className="text-white text-base font-normal font-['Montserrat'] tracking-tight mt-4">We are delighted to introduce Dr. Sarah Mitchell, our esteemed Branch Councillor at IEEE SRM. Dr. Mitchell brings a wealth of knowledge and experience to our IEEE community.<br /><br />Dr. Sarah Mitchell holds a Ph.D. in Electrical Engineering from MIT and has over 20 years of experience in the field. Her research in renewable energy systems and sustainable technologies has been published in numerous prestigious journals.</div>
            </div>
        </section>
    );
};

export default AboutCouncillor;
