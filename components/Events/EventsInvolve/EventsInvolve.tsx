import React from 'react';

const EventsInvolve: React.FC = () => {
    return (
        <div>
            {/* Desktop layout (above 640px) */}
            <section className="bg-black text-white py-16 hidden sm:block">
                <div className="w-[1440px] h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="self-stretch text-center text-zinc-300 text-2xl font-semibold font-montserrat">GET INVOLVED</div>
                    <div className="self-stretch text-center text-white text-[32px] font-bold font-montserrat">Join the IEEE Community</div>
                </div>

                <div className="w-[1440px] h-[328px] px-[84px] py-16 justify-center items-center gap-4 inline-flex">
                    <div className="grow shrink basis-0 text-center text-white text-2xl font-semibold font-montserrat">Join and Participate</div>
                    <div className="w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-start gap-8 inline-flex">
                        <div className="self-stretch text-white text-base font-semibold font-montserrat">Attend Our Events</div>
                        <div className="self-stretch">Stay updated with our upcoming events, workshops, and webinars. These gatherings are not just informative but also a great way to meet like-minded peers and experts in your field. Check out our <a href="#" className="text-white text-base font-normal font-montserrat underline">events calendar</a> for more details.</div>
                    </div>
                    <div className="w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-start gap-8 inline-flex">
                        <div className="self-stretch text-white text-base font-semibold font-montserrat">Follow Us on Social Media</div>
                        <div className="self-stretch">Connect with us on social media platforms to stay in the loop with the latest updates, announcements, and opportunities. <a href="#" className="text-white text-base font-normal font-montserrat underline">Follow us on Twitter</a> and <a href="#" className="text-white text-base font-normal font-montserrat underline">Like us on Facebook</a>!</div>
                    </div>
                </div>

                <div className="w-[1440px] h-[328px] px-[84px] py-16 justify-center items-center gap-4 inline-flex">
                    <div className="grow shrink basis-0 text-center text-white text-2xl font-semibold font-montserrat">Volunteer Opportunities</div>
                    <div className="w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-start gap-8 inline-flex">
                        <div className="self-stretch text-white text-base font-semibold font-montserrat">Event Organizers</div>
                        <div className="self-stretch text-white text-base font-normal font-montserrat">Help us plan, organize, and execute events that benefit our members and the community.</div>
                    </div>
                    <div className="w-[400px] h-[200px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-start gap-8 inline-flex">
                        <div className="self-stretch text-white text-base font-semibold font-montserrat">Technical Projects</div>
                        <div className="self-stretch text-white text-base font-normal font-montserrat">Get hands-on experience by participating in technical projects, competitions, and hackathons.</div>
                    </div>
                </div>
            </section>

            {/* Mobile layout (below 640px) */}
            <section className="bg-black text-white py-8 block sm:hidden">
                <div className="w-full px-4 flex flex-col justify-center items-center">
                    <div className="text-center text-gray-300 text-2xl font-bold font-montserrat mb-4">Join and Participate</div>

                    <div className="w-full max-w-[400px] mx-auto p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-start gap-4 mb-8">
                        <div className="text-white text-base font-semibold font-montserrat">Attend Our Events</div>
                        <div className="text-white text-base font-normal font-montserrat">
                            Stay updated with our upcoming events, workshops, and webinars. These gatherings are not just informative but also a great way to meet like-minded peers and experts in your field. Check out our <a href="#" className="text-white text-base font-normal font-montserrat underline">events calendar</a> for more details.
                        </div>
                    </div>

                    <div className="w-full max-w-[400px] mx-auto p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-start gap-4 mb-8">
                        <div className="text-white text-base font-semibold font-montserrat">Follow Us on Social Media</div>
                        <div className="text-white text-base font-normal font-montserrat">
                            Connect with us on social media platforms to stay in the loop with the latest updates, announcements, and opportunities. <a href="#" className="text-white text-base font-normal font-montserrat underline">Follow us on Twitter</a> and <a href="#" className="text-white text-base font-normal font-montserrat underline">Like us on Facebook</a>!
                        </div>
                    </div>

                    <div className="text-center text-gray-300 text-2xl font-bold font-montserrat mb-4">Volunteer Opportunities</div>

                    <div className="w-full max-w-[400px] mx-auto p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-start gap-4 mb-8">
                        <div className="text-white text-base font-semibold font-montserrat">Event Organizers</div>
                        <div className="text-white text-base font-normal font-montserrat">Help us plan, organize, and execute events that benefit our members and the community.</div>
                    </div>

                    <div className="w-full max-w-[400px] mx-auto p-3 rounded-lg border border-white border-opacity-10 flex-col justify-center items-start gap-4 mb-8">
                        <div className="text-white text-base font-semibold font-montserrat">Technical Projects</div>
                        <div className="text-white text-base font-normal font-montserrat">Get hands-on experience by participating in technical projects, competitions, and hackathons.</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsInvolve;
