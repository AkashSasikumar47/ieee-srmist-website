// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-500 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white font-bold text-xl">
                    <Link href="/">
                        <a>IEEE SRMIST</a>
                    </Link>
                </div>

                {/* Contact Details */}
                <div className="text-sm">
                    <p>Email: contact@ieeesrmist.org</p>
                    <p>Phone: +123 456 7890</p>
                    {/* Add more contact details as needed */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
