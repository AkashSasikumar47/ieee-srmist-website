import React from 'react';

const Announcements: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '100%' }}>
            {/* Desktop Layout */}
            <div className="hidden sm:flex w-[1440px] h-[328px] px-[84px] py-16 justify-center items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 text-center text-white text-2xl font-semibold font-['Montserrat']">Announcements</div>
                <div className="w-[400px] h-[200px] p-3 rounded-lg flex-col justify-start items-start inline-flex">
                    <div className="self-stretch text-white text-base font-semibold font-['Montserrat'] mb-2">Call for Volunteers: Join Our Organizing Team</div>
                    <div className="self-stretch text-white text-sm font-normal font-['Montserrat'] mb-2">September 5, 2023</div>
                    <div className="self-stretch text-white text-base font-normal font-['Montserrat']">
                        We're looking for enthusiastic volunteers to join our organizing team! If you're passionate about technology, event planning, or marketing, we want you on board. Contact us at [email address] to express your interest.
                    </div>
                </div>
                <div className="w-[400px] h-[200px] p-3 rounded-lg flex-col justify-start items-start inline-flex">
                    <div className="self-stretch text-white text-base font-semibold font-['Montserrat'] mb-2">Important Update: Event Date Change</div>
                    <div className="self-stretch text-white text-sm font-normal font-['Montserrat'] mb-2">August 10, 2023</div>
                    <div className="self-stretch text-white text-base font-normal font-['Montserrat']">
                        Please note that the date for our upcoming "Tech Talk Series" has been rescheduled to November 20th, 2023, due to unforeseen circumstances. We apologize for any inconvenience and hope to see you there.
                    </div>
                </div>
            </div>

            {/* Mobile Layout (below 640px) */}
            <div className="sm:hidden">
                <div className="w-full px-4">
                    <div className="text-center text-gray-300 text-2xl font-bold font-montserrat mb-4">Announcements</div>
                </div>
                <div className="w-full max-w-screen-md mx-auto px-4 py-4">
                    {/* Announcement Card 1 */}
                    <div className="w-full max-w-[400px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-start items-start gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-semibold font-['Montserrat']">Call for Volunteers: Join Our Organizing Team</div>
                        <div className="text-white text-sm font-normal font-['Montserrat']">September 5, 2023</div>
                        <div className="text-white text-base font-normal font-['Montserrat']">
                            We're looking for enthusiastic volunteers to join our organizing team! If you're passionate about technology, event planning, or marketing, we want you on board. Contact us at [email address] to express your interest.
                        </div>
                    </div>

                    {/* Announcement Card 2 */}
                    <div className="w-full max-w-[400px] p-3 rounded-lg border border-white border-opacity-10 flex-col justify-start items-start gap-4 inline-flex mb-8">
                        <div className="text-white text-base font-semibold font-['Montserrat']">Important Update: Event Date Change</div>
                        <div className="text-white text-sm font-normal font-['Montserrat']">August 10, 2023</div>
                        <div className="text-white text-base font-normal font-['Montserrat']">
                            Please note that the date for our upcoming "Tech Talk Series" has been rescheduled to November 20th, 2023, due to unforeseen circumstances. We apologize for any inconvenience and hope to see you there.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Announcements;
