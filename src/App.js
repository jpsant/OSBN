import React from 'react';
import './App.css';

import HeroSection from './Components/LandingPage/HeroSection/HeroSection';
import InfoSection from './Components/LandingPage/InfoSection/InfoSection';
import HistorySection from './Components/LandingPage/HistorySection/HistorySection';
import GallerySection from './Components/LandingPage/GallerySection/GallerySection';
import ScheduleSection from './Components/LandingPage/ScheduleSection/ScheduleSection';
import NewsSection from './Components/LandingPage/NewsSection/NewsSection';
import TechnicalSection from './Components/LandingPage/TechnicalSection/TechnicalSection';
import ContactSection from './Components/LandingPage/ContactSection/ContactSection';
import Footer from './Components/LandingPage/Footer/Footer';


function App() {
  return (
    <div className="App">
      <HeroSection/>
      <InfoSection/>
      <HistorySection/>
      <GallerySection/>
      <ScheduleSection/>
      <NewsSection/>
      <TechnicalSection/>
      <ContactSection/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
