"use client";

import React from 'react';
import Head from 'next/head';

import Hero from './components/Hero/Hero';
import ComingSoon from './components/ComingSoon/ComingSoon';
import About from './components/About/About';
import Register from './components/Register/Register';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>IEEE SRM | Empowering Tomorrow's Innovators</title>
        <meta name="description" content="Discover the future of technology with IEEE SRM Student Branch. Stay tuned for our exciting new website, packed with resources, events, and opportunities for students passionate about innovation and excellence." />
        <meta name="keywords" content="IEEE SRMIST, computer science, engineering, innovation, technology" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <Hero />
      <ComingSoon />
      <About />
      <Register />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;