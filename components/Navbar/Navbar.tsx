// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white font-bold text-xl">
                    <Link href="/">
                        <a>IEEE SRMIST</a>
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/about">
                            <a className="text-white hover:underline">About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events">
                            <a className="text-white hover:underline">Events</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a className="text-white hover:underline">Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a className="text-white hover:underline">Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
