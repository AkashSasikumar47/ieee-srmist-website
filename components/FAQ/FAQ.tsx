import React from 'react';

const FAQ: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '1440px', height: '740px' }}>

            <div className="w-[1440px] h-[740px] pt-12 pb-80 bg-black flex-col justify-start items-start gap-16 inline-flex">
                <div className="self-stretch h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">FAQ</div>
                    <div className="text-center text-white text-[32px] font-bold font-['Montserrat']">Frequently Asked Questions</div>
                </div>
                <div className="self-stretch py-3 justify-center items-center gap-8 inline-flex">
                    <div className="w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-8 inline-flex">
                        <div className="self-stretch text-center text-white text-base font-semibold font-['Montserrat']">How can I get involved with IEEE SRM as a student or technology enthusiast?</div>
                        <div className="self-stretch text-center text-white text-base font-normal font-['Montserrat'] tracking-tight">Getting involved with IEEE SRM is easy! You can join our events, workshops, and projects. Keep an eye on our website and social media for updates on upcoming activities.</div>
                    </div>
                    <div className="w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-8 inline-flex">
                        <div className="self-stretch text-center text-white text-base font-semibold font-['Montserrat']">How can I stay updated with IEEE SRM's latest news and events?</div>
                        <div className="self-stretch text-center text-white text-base font-normal font-['Montserrat'] tracking-tight">To stay informed about our latest news and events, visit our website regularly, and follow us on social media platforms like Facebook, Twitter, and LinkedIn. You can also subscribe to our newsletter for email updates.</div>
                    </div>
                    <div className="w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-8 inline-flex">
                        <div className="self-stretch text-center text-white text-base font-semibold font-['Montserrat']">Does IEEE SRM offer sponsorship opportunities for businesses and organizations?</div>
                        <div className="self-stretch text-center text-white text-base font-normal font-['Montserrat'] tracking-tight">Yes, we do! IEEE SRM provides sponsorship opportunities for businesses and organizations interested in partnering with us. Contact our sponsorship team for more information on collaboration possibilities.</div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FAQ;
