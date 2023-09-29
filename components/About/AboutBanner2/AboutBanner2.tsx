import React from 'react';
import Link from 'next/link';

const AboutIeee: React.FC = () => {
    return (
        <div>
            {/* Desktop Layout */}
            <section className="bg-black text-white py-16 hidden sm:block">
                <div className="w-[1440px] mx-auto px-[84px] flex-col justify-start items-center gap-4">
                    <div className="text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">ABOUT</div>
                    <div className="text-center text-white text-[32px] font-bold font-['Montserrat']">Energizing Innovation: IEEE SRMIST Student Branch</div>

                    <div className="py-16 flex-col justify-between items-center gap-8">
                        <div className="grow shrink basis-0 p-3 rounded-lg border border-white border-opacity-10 flex-col justify-end items-center gap-3 flex">
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
                </div>
            </section>

            {/* Mobile Layout */}
            <section className="bg-black text-white py-8 block sm:hidden">
                <div className="grid grid-cols-2 gap-4 px-4">
                    {/* "Domains" Section */}
                    <Link href="/domains">
                        <div className="w-full p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex">
                            <div className="text-white text-xl font-semibold font-['Montserrat'] text-center">DOMAINS</div>
                            <div className="text-white text-sm font-semibold font-['Montserrat'] text-center">VIEW</div>
                        </div>
                    </Link>

                    {/* "Resources" Section */}
                    <Link href="/resources">
                        <div className="w-full p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex">
                            <div className="text-white text-xl font-semibold font-['Montserrat'] text-center">RESOURCES</div>
                            <div className="text-white text-sm font-semibold font-['Montserrat'] text-center">VIEW</div>
                        </div>
                    </Link>

                    {/* "Membership" Section */}
                    <Link href="/membership">
                        <div className="w-full p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex">
                            <div className="text-white text-xl font-semibold font-['Montserrat'] text-center">MEMBERSHIP</div>
                            <div className="text-white text-sm font-semibold font-['Montserrat'] text-center">VIEW</div>
                        </div>
                    </Link>

                    {/* "Gallery" Section */}
                    <Link href="/gallery">
                        <div className="w-full p-3 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-10 flex-col justify-center items-center gap-4 inline-flex">
                            <div className="text-white text-xl font-semibold font-['Montserrat'] text-center">GALLERY</div>
                            <div className="text-white text-sm font-semibold font-['Montserrat'] text-center">VIEW</div>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutIeee;
