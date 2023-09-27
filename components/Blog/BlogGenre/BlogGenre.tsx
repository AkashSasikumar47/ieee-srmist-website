import React from 'react';

const BlogGenre: React.FC = () => {
    return (
        <div>
            <section className="bg-black text-white py-16" style={{ width: '1440px' }}>

                <div className="w-[1440px] h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="self-stretch text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">GENRE</div>
                    <div className="self-stretch text-center text-white text-[32px] font-bold font-['Montserrat']">Exploring the IEEE World: Our Blog Collection</div>
                </div>

            </section>
        </div>
    );
};

export default BlogGenre;
