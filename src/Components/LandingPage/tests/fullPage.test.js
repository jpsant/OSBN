import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';

import { FullPage } from '../FullPage';
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

configure({adapter: new Adapter()});

describe("<FullPage /> tests", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<FullPage />)
  })

  it("Should render one instace of the <SideMenu />", () => {
    expect(wrapper.find(SideMenu)).toHaveLength(1);
  });

  it("Should render one instace of the <HeroSection />", () => {
    expect(wrapper.find(HeroSection)).toHaveLength(1);
  });

  it("Should render one instace of the <InfoSection />", () => {
    expect(wrapper.find(InfoSection)).toHaveLength(1);
  });

  it("Should render one instace of the <HistorySection />", () => {
    expect(wrapper.find(HistorySection)).toHaveLength(1);
  });

  it("Should render one instace of the <GallerySection />", () => {
    expect(wrapper.find(GallerySection)).toHaveLength(1);
  });

  it("Should render one instace of the <ScheduleSection />", () => {
    expect(wrapper.find(ScheduleSection)).toHaveLength(1);
  });

  it("Should render one instace of the <NewsSection />", () => {
    expect(wrapper.find(NewsSection)).toHaveLength(1);
  });

  it("Should render one instace of the <TechnicalSection />", () => {
    expect(wrapper.find(TechnicalSection)).toHaveLength(1);
  });

  it("Should render one instace of the <ContactSection />", () => {
    expect(wrapper.find(ContactSection)).toHaveLength(1);
  });

  it("Should render one instace of the <Footer />", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
})