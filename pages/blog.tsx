import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import BlogGenre from '../components/Blog/BlogGenre/BlogGenre';
import BlogRecent from '../components/Blog/BlogRecent/BlogRecent';

import '../app/globals.css';

const BlogPage: React.FC = () => {
    return (
        <div>
            <Navbar />

            <section className="bg-black text-white py-16">

                {/* Desktop layout */}
                <div className="hidden sm:block max-w-screen-xl mx-auto px-4 sm:px-0 pt-64 pb-16 bg-black flex-col justify-start items-center gap-16">
                    <div className="self-stretch text-white text-8xl font-bold font-['Montserrat']">BLOG</div>
                    <div className="w-full max-w-screen-xl mx-auto px-4 pt-3 pb-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                        <div className="w-full max-w-screen-xl mx-auto px-4 pt-3 pb-16 bg-black flex-col justify-start items-center gap-8 inline-flex">
                            <div className="self-stretch h-[174px] pr-[84px] lg:pl-[800px] lg:pr-[84px] pt-3 pb-16 bg-black flex-col justify-start items-center gap-8 inline-flex">
                                <div className="grow shrink basis-0 text-white text-base font-normal font-['Montserrat'] tracking-tight">Dive into the rich tapestry of knowledge and insights within our vibrant blogosphere. Discover thought-provoking articles, expert opinions, and the latest trends in technology, engineering, and beyond, curated by the diverse minds of IEEE.</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Mobile layout */}
                <div className="block sm:hidden mx-auto px-4 py-8 bg-black text-center">
                    <div className="text-5xl font-bold font-montserrat">BLOG</div>
                    <div className="mt-8">
                        <p className="text-xl font-normal font-['Montserrat'] tracking-tight">Dive into the rich tapestry of knowledge and insights within our vibrant blogosphere. Discover thought-provoking articles, expert opinions, and the latest trends in technology, engineering, and beyond, curated by the diverse minds of IEEE.</p>
                    </div>
                </div>

            </section>

            <BlogGenre />
            <BlogRecent />

            <Footer />
        </div>
    );
};

export default BlogPage;
