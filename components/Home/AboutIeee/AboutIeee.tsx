import React from 'react';
import Link from 'next/link';

const AboutIeee: React.FC = () => {
    return (
        <section className="bg-black text-white py-16">
            {/* Desktop Layout */}
            <div className="hidden sm:flex w-[1440px] mx-auto px-[84px] flex-col justify-start items-center gap-4">
                <div className="self-stretch text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">ABOUT</div>
                <div className="self-stretch text-center text-white text-[32px] font-bold font-['Montserrat']">Energizing Innovation: IEEE SRMIST Student Branch</div>
            </div>

            <div className="hidden sm:flex w-[1440px] mx-auto py-16 flex-col justify-between items-center gap-8">
                <div className="self-stretch grow shrink basis-0 p-3 rounded-lg border border-white border-opacity-10 flex-col justify-end items-center gap-3 flex">
                    <div className="p-3 justify-center items-center gap-8 inline-flex">
                        {/* "Domains" Section */}
                        <Link href="/domains">
                            <div className="w-[280px] h-[200px] p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-end items-end gap-8 inline-flex">
                                <div className="text-center text-white text-2xl font-semibold font-['Montserrat']">DOMAINS</div>
                                <div className="px-4 py-1.5 bg-white rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-center text-black text-sm font-semibold font-['Montserrat']">VIEW</div>
                                </div>
                            </div>
                        </Link>

                        {/* "Resources" Section */}
                        <Link href="/resources">
                            <div className="w-[280px] h-[200px] p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-end items-end gap-8 inline-flex">
                                <div className="text-center text-white text-2xl font-semibold font-['Montserrat']">RESOURCES</div>
                                <div className="px-4 py-1.5 bg-white rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-center text-black text-sm font-semibold font-['Montserrat']">VIEW</div>
                                </div>
                            </div>
                        </Link>

                        {/* "Membership" Section */}
                        <Link href="/membership">
                            <div className="w-[280px] h-[200px] p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-end items-end gap-8 inline-flex">
                                <div className="text-center text-white text-2xl font-semibold font-['Montserrat']">MEMBERSHIP</div>
                                <div className="px-4 py-1.5 bg-white rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-center text-black text-sm font-semibold font-['Montserrat']">VIEW</div>
                                </div>
                            </div>
                        </Link>

                        {/* "Gallery" Section */}
                        <Link href="/gallery">
                            <div className="w-[280px] h-[200px] p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-end items-end gap-8 inline-flex">
                                <div className="text-center text-white text-2xl font-semibold font-['Montserrat']">GALLERY</div>
                                <div className="px-4 py-1.5 bg-white rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-center text-black text-sm font-semibold font-['Montserrat']">VIEW</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden">
                <div className="w-full px-4">
                    <div className="text-center text-blue-500 text-l font-bold font-montserrat mb-2">ABOUT</div>
                    <div className="text-center text-gray-300 text-2xl font-bold font-montserrat mb-4">Energizing Innovation: IEEE SRMIST Student Branch</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3">
                    {/* "Domains" Section */}
                    <Link href="/domains">
                        <div className="w-full p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex">
                            <div className="text-white text-2xl font-semibold font-['Montserrat'] text-center">DOMAINS</div>
                            <div className="text-white text-sm font-semibold font-['Montserrat'] text-center">VIEW</div>
                        </div>
                    </Link>

                    {/* "Resources" Section */}
                    <Link href="/resources">
                        <div className="w-full p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex">
                            <div className="text-white text-2xl font-semibold font-['Montserrat'] text-center">RESOURCES</div>
                            <div className="text-white text-sm font-semibold font-['Montserrat'] text-center">VIEW</div>
                        </div>
                    </Link>

                    {/* "Membership" Section */}
                    <Link href="/membership">
                        <div className="w-full p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex">
                            <div className="text-white text-2xl font-semibold font-['Montserrat'] text-center">MEMBERSHIP</div>
                            <div className="text-white text-sm font-semibold font-['Montserrat'] text-center">VIEW</div>
                        </div>
                    </Link>

                    {/* "Gallery" Section */}
                    <Link href="/gallery">
                        <div className="w-full p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex">
                            <div className="text-white text-2xl font-semibold font-['Montserrat'] text-center">GALLERY</div>
                            <div className="text-white text-sm font-semibold font-['Montserrat'] text-center">VIEW</div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutIeee;
