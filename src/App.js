import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HeroSection from './Components/LandingPage/HeroSection/HeroSection';
import InfoSection from './Components/LandingPage/InfoSection/InfoSection';
import HistorySection from './Components/LandingPage/HistorySection/HistorySection';
import GallerySection from './Components/LandingPage/GallerySection/GallerySection';
import VideoSection from './Components/LandingPage/VideoSection/VideoSection';
import ScheduleSection from './Components/LandingPage/ScheduleSection/ScheduleSection';
import NewsSection from './Components/LandingPage/NewsSection/NewsSection';
import TechnicalSection from './Components/LandingPage/TechnicalSection/TechnicalSection';
import ContactSection from './Components/LandingPage/ContactSection/ContactSection';
import Footer from './Components/LandingPage/Footer/Footer';

import Gallery from './Components/Gallery/Gallery';


class App extends Component {
  render() {

    let LandingPage = (
      <>
        <HeroSection />
        <InfoSection />
        <HistorySection />
        <GallerySection />
        <VideoSection />
        <ScheduleSection />
        <NewsSection />
        <TechnicalSection />
        <ContactSection />
        <Footer />
      </>
    );
      // SE LIGAR NA SEQUENCIA DAS ROUTES!
    return (
      <div className="App">
        <Switch>
          <Route path="/gallery" exact component={Gallery} />
          {LandingPage}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token
  }
}

export default withRouter(connect(mapStateToProps)(App));
