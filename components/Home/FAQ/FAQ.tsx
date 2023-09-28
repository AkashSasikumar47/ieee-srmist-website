import React from 'react';

const FAQ: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '100%' }}>
            {/* Desktop layout */}
            <div className="hidden sm:block">
                <div className="w-[1440px] h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="self-stretch text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">FAQ</div>
                    <div className="self-stretch text-center text-white text-[32px] font-bold font-['Montserrat']">Frequently Asked Questions</div>
                </div>
                <div className="w-[1440px] h-[328px] px-[84px] py-16 justify-center items-start gap-8 inline-flex">
                    <div className="w-[400px] max-w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-semibold font-['Montserrat'] tracking-tight text-center">Q: How can I join IEEE SRM?</div>
                        <div className="text-white text-base font-normal font-['Montserrat'] text-center">A: You can join IEEE SRM by visiting our Membership page and following the instructions there.</div>
                    </div>
                    <div className="w-[400px] max-w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-semibold font-['Montserrat'] tracking-tight text-center">Q: What events does IEEE SRM host?</div>
                        <div className="text-white text-base font-normal font-['Montserrat'] text-center">A: IEEE SRM hosts a wide range of events, including technical workshops, conferences, and social events. You can check our Events page for details.</div>
                    </div>
                    <div className="w-[400px] max-w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-semibold font-['Montserrat'] tracking-tight text-center">Q: How can I become a sponsor for IEEE SRM events?</div>
                        <div className="text-white text-base font-normal font-['Montserrat'] text-center">A: If you're interested in sponsoring our events, please visit our Sponsorship page and contact us for more information.</div>
                    </div>
                </div>
            </div>

            {/* Mobile layout (below 640px) */}
            <div className="block sm:hidden">
                <div className="px-4">
                    <div className="text-2xl font-semibold font-['Montserrat'] text-center">FAQ</div>
                    <div className="text-white text-[24px] font-bold font-['Montserrat'] text-center">Frequently Asked Questions</div>
                </div>
                <div className="max-w-screen-md mx-auto px-4 py-4">
                    <div className="w-full max-w-[400px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-semibold font-['Montserrat'] tracking-tight text-center">Q: How can I join IEEE SRM?</div>
                        <div className="text-white text-base font-normal font-['Montserrat'] text-center">A: You can join IEEE SRM by visiting our Membership page and following the instructions there.</div>
                    </div>
                    <div className="w-full max-w-[400px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-semibold font-['Montserrat'] tracking-tight text-center">Q: What events does IEEE SRM host?</div>
                        <div className="text-white text-base font-normal font-['Montserrat'] text-center">A: IEEE SRM hosts a wide range of events, including technical workshops, conferences, and social events. You can check our Events page for details.</div>
                    </div>
                    <div className="w-full max-w-[400px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-semibold font-['Montserrat'] tracking-tight text-center">Q: How can I become a sponsor for IEEE SRM events?</div>
                        <div className="text-white text-base font-normal font-['Montserrat'] text-center">A: If you're interested in sponsoring our events, please visit our Sponsorship page and contact us for more information.</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
