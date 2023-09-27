// components/Navbar/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <div className="bg-black text-white py-4 lg:h-20 px-4 lg:px-16 lg:py-7 flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <div className="text-white font-bold text-2xl lg:text-xl font-montserrat mb-2 lg:mb-0">
                <Link href="/">HOME</Link>
            </div>
            <div className="text-white font-bold text-2xl lg:text-xl font-montserrat mb-2 lg:mb-0">
                <Link href="/about">ABOUT</Link>
            </div>
            <div className="text-white font-bold text-2xl lg:text-xl font-montserrat mb-2 lg:mb-0">
                <Link href="/events">EVENTS</Link>
            </div>
            <div className="text-white font-bold text-2xl lg:text-xl font-montserrat mb-2 lg:mb-0">
                <Link href="/blog">BLOG</Link>
            </div>
            <div className="text-white font-bold text-2xl lg:text-xl font-montserrat">
                <Link href="/contact">CONTACT</Link>
            </div>
        </div>
    );
};

export default Navbar;
