import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actioncreators';
import './styles.scss';
import Helmet from 'react-helmet';

import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import HistorySection from '../HistorySection';
import GallerySection from '../GallerySection';
import ScheduleSection from '../ScheduleSection';
import NewsSection from '../NewsSection';
import TechnicalSection from '../TechnicalSection';
import ContactSection from '../ContactSection';
import Footer from '../Footer';

import SideMenu from '../../UI/sideMenu';


export class FullPage extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  state = {
    menu: false
  }

  constructor(props) {
    super(props);
    this.historySection = React.createRef();
    this.gallerySection = React.createRef();
    this.scheduleSection = React.createRef();
    this.newsSection = React.createRef();
    this.technicalSection = React.createRef();
    this.contactSection = React.createRef();
    this.footerSection = React.createRef();
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  handleScroll = (e) => {
    if ((document.documentElement.scrollTop >= 1850)) {
      if (this.state.menu !== true) {
        this.setState({ menu: true });
      }
    } else {
      if (this.state.menu !== false) {
        this.setState({ menu: false })
      }
    }
  }

  scrollToSection(section) {
    switch (section) {
      case 1:
        this.historySection.current.scrollIntoView({ behavior: 'smooth' });
        this.props.changeSection('history');
        break;
      case 2:
        this.gallerySection.current.scrollIntoView({ behavior: 'smooth' });
        this.props.changeSection('gallery');
        break;
      case 3:
        this.scheduleSection.current.scrollIntoView({ behavior: 'smooth' });
        this.props.changeSection('schedule');
        break;
      case 4:
        this.newsSection.current.scrollIntoView({ behavior: 'smooth' });
        this.props.changeSection('news');
        break;
      case 5:
        this.technicalSection.current.scrollIntoView({ behavior: 'smooth' });
        this.props.changeSection('technical');
        break;
      case 6:
        this.contactSection.current.scrollIntoView({ behavior: 'smooth' });
        this.props.changeSection('contact');
        break;
      default:
        return
    }
  }


  render() {
    return (
      <>
        <Helmet>
          <title>Orquestra Sanfônica Balaio Nordeste</title>
          <meta name="description" content="Website da Orquestra Sanfônica Balaio Nordeste"></meta>
        </Helmet>
        <div className="pageContainer">
          <SideMenu clicked={this.scrollToSection} show={this.state.menu} />
          <HeroSection />
          <InfoSection />
          <HistorySection forwardRef={this.historySection} />
          <GallerySection forwardRef={this.gallerySection} />
          <ScheduleSection forwardRef={this.scheduleSection} />
          <NewsSection forwardRef={this.newsSection} />
          <TechnicalSection forwardRef={this.technicalSection} />
          <ContactSection forwardRef={this.contactSection} />
          <Footer />
        </div>
      </>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    changeSection: (section) => dispatch(actions.changeSection(section))
  }
}

export default connect(null, mapDispatchToProps)(FullPage);
