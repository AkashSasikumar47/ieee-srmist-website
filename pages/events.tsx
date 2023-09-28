// pages/events.tsx
import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import EventsInvolve from '../components/Events/EventsInvolve/EventsInvolve';
import EventsPast from '../components/Events/EventsPast/EventsPast';
import EventsUpcoming from '../components/Events/EventsUpcoming/EventsUpcoming';


import '../app/globals.css';

const EventsPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            <section className="bg-black text-white py-16">

                {/* Desktop layout */}
                <div className="hidden sm:block max-w-screen-xl mx-auto px-4 sm:px-0 pt-64 pb-16 bg-black flex-col justify-start items-center gap-16">
                    <div className="self-stretch text-white text-8xl font-bold font-['Montserrat']">EVENTS</div>
                    <div className="w-full max-w-screen-xl mx-auto px-4 pt-3 pb-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                        <div className="w-full max-w-screen-xl mx-auto px-4 pt-3 pb-16 bg-black flex-col justify-start items-center gap-8 inline-flex">
                            <div className="self-stretch h-[174px] pr-[84px] lg:pl-[800px] lg:pr-[84px] pt-3 pb-16 bg-black flex-col justify-start items-center gap-8 inline-flex">
                                <div className="grow shrink basis-0 text-white text-base font-normal font-['Montserrat'] tracking-tight">Discover and participate in a myriad of enlightening and interactive events within our hub. From technical symposiums to innovation showcases, our events offer opportunities for learning, networking, and collaboration in the ever-evolving landscape of technology and engineering.</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Mobile layout */}
                <div className="block sm:hidden mx-auto px-4 py-8 bg-black text-center">
                    <div className="text-5xl font-bold font-montserrat">EVENTS</div>
                    <div className="mt-8">
                        <p className="text-xl font-normal font-['Montserrat'] tracking-tight">Discover and participate in a myriad of enlightening and interactive events within our hub. From technical symposiums to innovation showcases, our events offer opportunities for learning, networking, and collaboration in the ever-evolving landscape of technology and engineering.</p>
                    </div>
                </div>

            </section>

            <EventsUpcoming />
            <EventsPast />
            <EventsInvolve />


            <div className="w-full px-4">
                <div className="text-center text-blue-500 text-l font-bold font-montserrat">ABOUT</div>
                <div className="text-center text-gray-300 text-2xl font-bold font-montserrat mb-4">Energizing Innovation: IEEE SRMIST Student Branch</div>
            </div>

            <Footer />
        </div>
    );
};

export default EventsPage;
