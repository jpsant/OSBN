import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';

import HeroSection from '../HeroSection';
import LanguageSelector from '../../UI/languageSelector/languageSelector';
import AnimatedLogo from '../../UI/heroLogo/heroLogo';

configure({adapter: new Adapter()});

describe("<HeroSection /> Tests.", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HeroSection />);
  });

  it("Should render one instance of the <LanguageSelector />", () => {
    expect(wrapper.find(LanguageSelector)).toHaveLength(1);
  });

  it("Should render the <AnimatedLogo />", () => {
    expect(wrapper.find(AnimatedLogo)).toHaveLength(1);
  })

})