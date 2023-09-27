import React from 'react';

const Testimonial: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '1440px' }}>

            <div className="w-[1440px] h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">TESTIMONIALS</div>
                <div className="self-stretch text-center text-white text-[32px] font-bold font-['Montserrat']">Voices of Experience: Testimonials from IEEE SRM Community</div>
            </div>

            <div className="w-[1440px] h-[328px] px-[84px] py-16 justify-center items-start gap-8 inline-flex">
                <div className="w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-8 inline-flex">
                    <div className="self-stretch text-center text-white text-base font-normal font-['Montserrat'] tracking-tight">“Our partnership with IEEE SRM has allowed us to connect with a diverse and innovative community. Their events have been a valuable platform for showcasing our latest technology solutions."</div>
                    <div className="self-stretch text-center text-white text-base font-semibold font-['Montserrat']">Apple.inc - Event Sponsor</div>
                </div>
                <div className="w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-8 inline-flex">
                    <div className="self-stretch text-center text-white text-base font-normal font-['Montserrat'] tracking-tight">“Joining IEEE SRM was a game-changer for me. I've had the opportunity to collaborate on exciting projects and network with brilliant minds in the tech industry. It's been an enriching journey."</div>
                    <div className="self-stretch text-center text-white text-base font-semibold font-['Montserrat']">Cristiano Ronaldo - Member IEEE</div>
                </div>
                <div className="w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-8 inline-flex">
                    <div className="self-stretch text-center text-white text-base font-normal font-['Montserrat'] tracking-tight">“Our partnership with IEEE SRM has allowed us to connect with a diverse and innovative community. Their events have been a valuable platform for showcasing our latest technology solutions."</div>
                    <div className="self-stretch text-center text-white text-base font-semibold font-['Montserrat']">Automobili Lamborghini - Event Sponsor</div>
                </div>
            </div>

        </section>
    );
};

export default Testimonial;
