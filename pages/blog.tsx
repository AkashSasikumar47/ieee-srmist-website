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

            <section className="bg-black text-white py-16" style={{ width: '1440px' }}>

                <div className="w-[1440px] h-[581px] px-[84px] pt-64 pb-16 bg-black flex-col justify-start items-center gap-16 inline-flex">
                    <div className="self-stretch text-white text-8xl font-bold font-['Montserrat']">BLOGS</div>
                    <div className="w-[1440px] pl-[800px] pr-[84px] justify-start items-start gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-white text-base font-normal font-['Montserrat'] tracking-tight">Dive into the rich tapestry of knowledge and insights within our vibrant blogosphere. Discover thought-provoking articles, expert opinions, and the latest trends in technology, engineering, and beyond, curated by the diverse minds of IEEE.</div>
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