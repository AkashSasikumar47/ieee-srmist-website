import React from 'react';

const Testimonial: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '100%' }}>
            {/* Desktop layout */}
            <div className="hidden sm:block">
                <div className="w-[1440px] h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="self-stretch text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">TESTIMONIALS</div>
                    <div className="self-stretch text-center text-white text-[32px] font-bold font-['Montserrat']">Voices of Experience: Testimonials from IEEE SRM Community</div>
                </div>
                <div className="w-[1440px] h-[328px] px-[84px] py-16 justify-center items-start gap-8 inline-flex">
                    <div className="w-[400px] max-w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-normal font-['Montserrat'] tracking-tight text-center">“Our partnership with IEEE SRM has allowed us to connect with a diverse and innovative community. Their events have been a valuable platform for showcasing our latest technology solutions."</div>
                        <div className="text-white text-base font-semibold font-['Montserrat'] text-center">Apple.inc - Event Sponsor</div>
                    </div>
                    <div className="w-[400px] max-w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-normal font-['Montserrat'] tracking-tight text-center">“Joining IEEE SRM was a game-changer for me. I've had the opportunity to collaborate on exciting projects and network with brilliant minds in the tech industry. It's been an enriching journey."</div>
                        <div className="text-white text-base font-semibold font-['Montserrat'] text-center">Cristiano Ronaldo - Member IEEE</div>
                    </div>
                    <div className="w-[400px] max-w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-normal font-['Montserrat'] tracking-tight text-center">“Our partnership with IEEE SRM has allowed us to connect with a diverse and innovative community. Their events have been a valuable platform for showcasing our latest technology solutions."</div>
                        <div className="text-white text-base font-semibold font-['Montserrat'] text-center">Automobili Lamborghini - Event Sponsor</div>
                    </div>
                </div>
            </div>

            {/* Mobile layout (below 640px) */}
            <div className="block sm:hidden">
                <div className="px-4">
                    <div className="text-2xl font-semibold font-['Montserrat'] text-center">TESTIMONIALS</div>
                    <div className="text-white text-[24px] font-bold font-['Montserrat'] text-center">Voices of Experience: Testimonials from IEEE SRM Community</div>
                </div>
                <div className="max-w-screen-md mx-auto px-4 py-4">
                    <div className="w-full max-w-[400px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-normal font-['Montserrat'] tracking-tight text-center">“Our partnership with IEEE SRM has allowed us to connect with a diverse and innovative community. Their events have been a valuable platform for showcasing our latest technology solutions."</div>
                        <div className="text-white text-base font-semibold font-['Montserrat'] text-center">Apple.inc - Event Sponsor</div>
                    </div>
                    <div className="w-full max-w-[400px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-normal font-['Montserrat'] tracking-tight text-center">“Joining IEEE SRM was a game-changer for me. I've had the opportunity to collaborate on exciting projects and network with brilliant minds in the tech industry. It's been an enriching journey."</div>
                        <div className="text-white text-base font-semibold font-['Montserrat'] text-center">Cristiano Ronaldo - Member IEEE</div>
                    </div>
                    <div className="w-full max-w-[400px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-normal font-['Montserrat'] tracking-tight text-center">“Our partnership with IEEE SRM has allowed us to connect with a diverse and innovative community. Their events have been a valuable platform for showcasing our latest technology solutions."</div>
                        <div className="text-white text-base font-semibold font-['Montserrat'] text-center">Automobili Lamborghini - Event Sponsor</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
