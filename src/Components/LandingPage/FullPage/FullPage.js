import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actioncreators';
import classes from './css/FullPage.module.css';

import HeroSection from '../HeroSection/HeroSection';
import InfoSection from '../InfoSection/InfoSection';
import HistorySection from '../HistorySection/HistorySection';
import GallerySection from '../GallerySection/GallerySection';
import ScheduleSection from '../ScheduleSection/ScheduleSection';
import NewsSection from '../NewsSection/NewsSection';
import TechnicalSection from '../TechnicalSection/TechnicalSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';

import SideMenu from '../../UI/sideMenu/sideMenu';


class FullPage extends Component {
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
        }
    }


    render() {
        return (
            <div className={classes.pageContainer}>
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
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        changeSection: (section) => dispatch(actions.changeSection(section))
    }
}

export default connect(null, mapDispatchToProps)(FullPage);
