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

            <section className="bg-black text-white py-16" style={{ width: '1440px' }}>
                <div className="w-[1440px] h-[641px] px-[84px] pt-64 pb-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                    <div className="self-stretch text-white text-8xl font-bold font-['Montserrat']">MEMBERSHIP</div>
                    <div className="w-[1440px] pl-[800px] pr-[84px] justify-start items-start gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-white text-base font-normal font-['Montserrat'] tracking-tight">Join the dynamic and innovative community of IEEE SRMIST Student Branch members. Whether you're a student looking to enhance your knowledge, expand your network, or contribute to cutting-edge projects, our IEEE membership offers a wealth of opportunities. Discover the benefits of being part of our tech-savvy family and explore the diverse range of activities and resources available to our members. Get started on your IEEE journey today!</div>
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
