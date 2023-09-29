import React from 'react';

const DomainAllPage: React.FC = () => {
    return (
        <div>
            {/* Desktop layout */}
            <section className="bg-black text-white py-16 hidden sm:block" style={{ width: '1440px' }}>
                <div className="w-[1440px] h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="self-stretch text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">OUR DOMAINS</div>
                    <div className="self-stretch text-center text-white text-[32px] font-bold font-['Montserrat']">Exploring Beyond the Boundaries</div>
                </div>

                <div className="w-[1440px] h-[2728px] px-[84px] py-16 flex-col justify-start items-center gap-2.5 inline-flex">
                    <div className="self-stretch h-[512px] rounded-lg justify-start items-center inline-flex">
                        <img className="w-[636px] h-[512px] relative" src="https://via.placeholder.com/636x512" alt="Domain 1" />
                        <div className="grow shrink basis-0 self-stretch px-[54px] py-16 flex-col justify-between items-start inline-flex">
                            <div className="self-stretch text-white text-[32px] font-bold font-['Montserrat']">Web & App Development</div>
                            <div className="self-stretch text-white text-base font-normal font-['Montserrat'] tracking-tight">Craft digital experiences that drive innovation. Your code can transform the way we interact with technology.</div>
                            <div className="self-stretch justify-start items-start gap-8 inline-flex">
                                <div className="justify-start items-center gap-3 flex">
                                    <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Head 1" />
                                    <div className="text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">Head - Name 123</div>
                                </div>
                                <div className="justify-start items-center gap-3 flex">
                                    <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Secretary 1" />
                                    <div className="text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">Secretary - Name 123</div>
                                </div>
                            </div>
                            <div className="px-4 py-1.5 bg-white rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-black text-sm font-semibold font-['Montserrat']">View More</div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat this block for other sections */}
                </div>
            </section>

            {/* Mobile layout */}
            <section className="bg-black text-white py-8 block sm:hidden">
                <div className="w-full px-4">
                    <div className="text-center text-blue-500 text-l font-bold font-montserrat mb-2">OUR DOMAINS</div>
                    <div className="text-center text-gray-300 text-2xl font-bold font-montserrat mb-4">Exploring Beyond the Boundaries</div>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Repeat this block for each section */}
                    <div className="w-full px-4">
                        <img className="w-full h-auto mb-4" src="https://via.placeholder.com/636x512" alt="Domain 1" />
                        <div className="text-white text-2xl font-bold font-['Montserrat'] mb-4">Web & App Development</div>
                        <div className="text-white text-base font-normal font-['Montserrat'] tracking-tight mb-4">Craft digital experiences that drive innovation. Your code can transform the way we interact with technology.</div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Head 1" />
                                <div className="text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">Head - Name 123</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Secretary 1" />
                                <div className="text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">Secretary - Name 123</div>
                            </div>
                        </div>
                        <div className="border border-lime-500 rounded-full inline-flex mt-4">
                            <button className="text-lime-500 text-sm font-semibold font-['Montserrat'] px-2 py-1">View More</button>
                        </div>
                    </div>
                    <div className="w-full px-4">
                        <img className="w-full h-auto mb-4" src="https://via.placeholder.com/636x512" alt="Domain 1" />
                        <div className="text-white text-2xl font-bold font-['Montserrat'] mb-4">Web & App Development</div>
                        <div className="text-white text-base font-normal font-['Montserrat'] tracking-tight mb-4">Craft digital experiences that drive innovation. Your code can transform the way we interact with technology.</div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Head 1" />
                                <div className="text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">Head - Name 123</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Secretary 1" />
                                <div className="text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">Secretary - Name 123</div>
                            </div>
                        </div>
                        <div className="border border-lime-500 rounded-full inline-flex mt-4">
                            <button className="text-lime-500 text-sm font-semibold font-['Montserrat'] px-2 py-1">View More</button>
                        </div>
                    </div>
                    <div className="w-full px-4">
                        <img className="w-full h-auto mb-4" src="https://via.placeholder.com/636x512" alt="Domain 1" />
                        <div className="text-white text-2xl font-bold font-['Montserrat'] mb-4">Web & App Development</div>
                        <div className="text-white text-base font-normal font-['Montserrat'] tracking-tight mb-4">Craft digital experiences that drive innovation. Your code can transform the way we interact with technology.</div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Head 1" />
                                <div className="text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">Head - Name 123</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Secretary 1" />
                                <div className="text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">Secretary - Name 123</div>
                            </div>
                        </div>
                        <div className="border border-lime-500 rounded-full inline-flex mt-4">
                            <button className="text-lime-500 text-sm font-semibold font-['Montserrat'] px-2 py-1">View More</button>
                        </div>
                    </div>
                    <div className="w-full px-4">
                        <img className="w-full h-auto mb-4" src="https://via.placeholder.com/636x512" alt="Domain 1" />
                        <div className="text-white text-2xl font-bold font-['Montserrat'] mb-4">Web & App Development</div>
                        <div className="text-white text-base font-normal font-['Montserrat'] tracking-tight mb-4">Craft digital experiences that drive innovation. Your code can transform the way we interact with technology.</div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Head 1" />
                                <div className="text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">Head - Name 123</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Secretary 1" />
                                <div className="text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">Secretary - Name 123</div>
                            </div>
                        </div>
                        <div className="border border-lime-500 rounded-full inline-flex mt-4">
                            <button className="text-lime-500 text-sm font-semibold font-['Montserrat'] px-2 py-1">View More</button>
                        </div>
                    </div>
                    <div className="w-full px-4">
                        <img className="w-full h-auto mb-4" src="https://via.placeholder.com/636x512" alt="Domain 1" />
                        <div className="text-white text-2xl font-bold font-['Montserrat'] mb-4">Web & App Development</div>
                        <div className="text-white text-base font-normal font-['Montserrat'] tracking-tight mb-4">Craft digital experiences that drive innovation. Your code can transform the way we interact with technology.</div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Head 1" />
                                <div className="text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">Head - Name 123</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Secretary 1" />
                                <div className="text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">Secretary - Name 123</div>
                            </div>
                        </div>
                        <div className="border border-lime-500 rounded-full inline-flex mt-4">
                            <button className="text-lime-500 text-sm font-semibold font-['Montserrat'] px-2 py-1">View More</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default DomainAllPage;
