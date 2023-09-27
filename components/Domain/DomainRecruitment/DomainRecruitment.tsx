import React from 'react';

const DomainRecruitmentPage: React.FC = () => {
    return (
        <div>
            <section className="bg-black text-white py-16" style={{ width: '1440px' }}>

                <div className="w-[1440px] h-[343px] px-[84px] py-16 flex-col justify-start items-center gap-2.5 inline-flex">
                    <div className="self-stretch h-[215px] p-3 rounded-lg flex-col justify-start items-center gap-8 flex">
                        <div className="self-stretch h-[118px] flex-col justify-start items-center gap-8 flex">
                            <div className="self-stretch justify-center items-center gap-3 inline-flex">
                                <div className="text-center text-white text-[38px] font-bold font-['Montserrat']">We’re</div>
                                <div className="p-2.5 bg-amber-500 rounded-md justify-start items-start gap-2.5 flex">
                                    <div className="text-center text-black text-[38px] font-bold font-['Montserrat']">Recruiting</div>
                                </div>
                            </div>
                            <div className="self-stretch text-center text-white text-base font-semibold font-['Montserrat']">WAD | MnC | S&M | CLP | WIE</div>
                        </div>
                        <div className="px-8 py-3 bg-black rounded border border-amber-500 justify-start items-center gap-2.5 inline-flex">
                            <div className="text-center text-white text-sm font-extrabold font-['Montserrat'] tracking-tight">CLICK ME!</div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default DomainRecruitmentPage;
