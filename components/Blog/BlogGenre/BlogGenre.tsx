import React from 'react';

const BlogGenre: React.FC = () => {
    return (
        <div>
            {/* Desktop layout */}
            <section className="bg-black text-white py-16 hidden sm:block">
                <div className="w-[1440px] h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="self-stretch text-center text-zinc-300 text-xl font-semibold font-['Montserrat']">GENRE</div>
                    <div className="self-stretch text-center text-white text-2xl font-bold font-['Montserrat']">Exploring the IEEE World: Our Blog Collection</div>
                </div>
            </section>

            {/* Mobile layout */}
            <section className="bg-black text-white py-8 block sm:hidden">
                <div className="max-w-screen-xl mx-auto px-4 text-center">
                    <div className="text-l font-bold font-montserrat">GENRE</div>
                    <div className="mt-4">
                        <p className="text-2xl font-semibold font-montserrat">Exploring the IEEE World: Our Blog Collection</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogGenre;