import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import Hero from '../components/Home/Hero/Hero';
import GallerySlide from '../components/Home/GallerySlide/GallerySlide';
import AboutIeee from '../components/Home/AboutIeee/AboutIeee';
import PopularEvents from '../components/Home/PopularEvents/PopularEvents';
import LatestNews from '../components/Home/LatestNews/LatestNews';
import Announcements from '../components/Home/Announcements/Announcements';
import FeaturedActivities from '../components/Home/FeaturedActivities/FeaturedActivities';
import RecentBlogs from '../components/Home/RecentBlogs/RecentBlogs';
import FAQ from '../components/Home/FAQ/FAQ';
import Testimonial from '../components/Home/Testimonial/Testimonial';
import SponsorList from '../components/Home/SponsorList/SponsorList';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">


      <Hero />

    </div>
  );
};

export default HomePage;