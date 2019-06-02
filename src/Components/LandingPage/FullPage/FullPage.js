import React from 'react';

import HeroSection from '../HeroSection/HeroSection';
import InfoSection from '../InfoSection/InfoSection';
import HistorySection from '../HistorySection/HistorySection';
import GallerySection from '../GallerySection/GallerySection';
import VideoSection from '../VideoSection/VideoSection';
import ScheduleSection from '../ScheduleSection/ScheduleSection';
import NewsSection from '../NewsSection/NewsSection';
import TechnicalSection from '../TechnicalSection/TechnicalSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';


const FullPage = (props) => {
    return (
        <>
            <HeroSection/>
            <InfoSection/>
            <HistorySection/>
            <GallerySection/>
            <VideoSection/>
            <ScheduleSection/>
            <NewsSection/>
            <TechnicalSection/>
            <ContactSection/>
            <Footer/>
        </>
    );
}

export default FullPage;