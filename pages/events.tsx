// pages/events.tsx
import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import EventsInvolve from '../components/Events/EventsInvolve/EventsInvolve';
import EventsPast from '../components/Events/EventsPast/EventsPast';
import EventsUpcoming from '../components/Events/EventsUpcoming/EventsUpcoming';
import Testimonial from '../components/Home/Testimonial/Testimonial';
import SponsorList from '../components/Home/SponsorList/SponsorList';

import '../app/globals.css';

const EventsPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            <section className="bg-black text-white py-16" style={{ width: '1440px' }}>
                <div className="w-[1440px] h-[601px] px-[84px] pt-64 pb-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                    <div className="self-stretch text-white text-8xl font-bold font-['Montserrat']">EVENTS</div>
                    <div className="w-[1440px] pl-[800px] pr-[84px] justify-start items-start gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-white text-base font-normal font-['Montserrat'] tracking-tight">Discover and participate in a myriad of enlightening and interactive events within our hub. From technical symposiums to innovation showcases, our events offer opportunities for learning, networking, and collaboration in the ever-evolving landscape of technology and engineering.</div>
                    </div>
                </div>
            </section>

            <EventsUpcoming />
            <EventsPast />
            <EventsInvolve />
            <Testimonial />
            <SponsorList />

            <Footer />
        </div>
    );
};

export default EventsPage;
