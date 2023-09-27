import React from 'react';

const MembershipPageContent: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '1440px' }}>

            <div className="w-[1440px] h-[740px] px-[84px] py-16 flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="self-stretch h-[612px] p-4 rounded-lg border border-white border-opacity-10 flex-col justify-end items-end flex">
                    <div className="w-[200px] px-4 py-1.5 bg-amber-500 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-center text-black text-sm font-bold font-['Montserrat']">Join IEEE</div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default MembershipPageContent;