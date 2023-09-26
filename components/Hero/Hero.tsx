// Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="bg-black text-white py-16">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to IEEE SRMIST</h1>
                <p className="text-lg">Advancing Technology for the Betterment of Humanity</p>
                {/* Add a call-to-action button if needed */}
            </div>
        </section>
    );
};

export default Hero;
