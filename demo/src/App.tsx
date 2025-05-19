import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LocationBanner from './components/LocationBanner';
import JewelryCategories from './components/JewelryCategories';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-pink min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <JewelryCategories />
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
}

export default App;