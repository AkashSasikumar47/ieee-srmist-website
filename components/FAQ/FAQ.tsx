// Create a new component named FAQ.tsx
import React from 'react';

const FAQ: React.FC = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                {/* Add your FAQ items and answers here */}
            </div>
        </section>
    );
};

export default FAQ;
