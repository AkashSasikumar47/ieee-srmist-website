import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import MembershipPageContent from '../components/Membership/MembershipPage/MembershipPage';
import AboutBanner2 from '../components/About/AboutBanner2/AboutBanner2';


import '../app/globals.css';

const MembershipPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            <section className="bg-black text-white py-16">

                {/* Desktop layout */}
                <div className="hidden sm:block max-w-screen-xl mx-auto px-4 sm:px-0 pt-64 pb-16 bg-black flex-col justify-start items-center gap-16">
                    <div className="self-stretch text-white text-8xl font-bold font-['Montserrat']">MEMBERSHIP</div>
                    <div className="w-full max-w-screen-xl mx-auto px-4 pt-3 pb-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                        <div className="w-full max-w-screen-xl mx-auto px-4 pt-3 pb-16 bg-black flex-col justify-start items-center gap-8 inline-flex">
                            <div className="self-stretch h-[174px] pr-[84px] lg:pl-[800px] lg:pr-[84px] pt-3 pb-16 bg-black flex-col justify-start items-center gap-8 inline-flex">
                                <div className="grow shrink basis-0 text-white text-base font-normal font-['Montserrat'] tracking-tight">Join the dynamic and innovative community of IEEE SRMIST Student Branch members. Whether you're a student looking to enhance your knowledge, expand your network, or contribute to cutting-edge projects, our IEEE membership offers a wealth of opportunities. Discover the benefits of being part of our tech-savvy family and explore the diverse range of activities and resources available to our members. Get started on your IEEE journey today!</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Mobile layout */}
                <div className="block sm:hidden mx-auto px-4 py-8 bg-black text-center">
                    <div className="text-5xl font-bold font-montserrat">MEMBERSHIP</div>
                    <div className="mt-8">
                        <p className="text-xl font-normal font-['Montserrat'] tracking-tight">Join the dynamic and innovative community of IEEE SRMIST Student Branch members. Whether you're a student looking to enhance your knowledge, expand your network, or contribute to cutting-edge projects, our IEEE membership offers a wealth of opportunities. Discover the benefits of being part of our tech-savvy family and explore the diverse range of activities and resources available to our members. Get started on your IEEE journey today!</p>
                    </div>
                </div>

            </section>

            <MembershipPageContent />
            <AboutBanner2 />


            <Footer />
        </div>
    );
};

export default MembershipPage;
