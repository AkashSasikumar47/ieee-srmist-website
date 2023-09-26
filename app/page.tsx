// app/page.tsx
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero'; // Update the import path
import AboutIeee from '../components/AboutIeee/AboutIeee'; // Update the import path
import PopularEvents from '../components/PopularEvents/PopularEvents'; // Update the import path
import RecentBlogs from '../components/RecentBlogs/RecentBlogs'; // Update the import path
import FAQ from '../components/FAQ/FAQ'; // Update the import path

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />

      <Hero />
      <AboutIeee />
      <PopularEvents />
      <RecentBlogs />
      <FAQ />

      <main className="container mx-auto p-4">
        {/* Add the rest of your content here */}
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
