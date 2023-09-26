// app/index.tsx
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />

      <main className="container mx-auto p-4">
        {/* Add your homepage content here */}
        <h1 className="text-3xl font-bold mb-4">Welcome to IEEE SRMIST</h1>
        <p className="text-lg">
          A dynamic chapter dedicated to advancing technology for the betterment of humanity.
        </p>
        {/* Add more content as needed */}
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
