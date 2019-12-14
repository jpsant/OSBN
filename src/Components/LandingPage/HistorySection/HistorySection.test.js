import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

import { HistorySection } from './HistorySection';
import HistoryDiv from '../../UI/historyDiv/historyDiv';

describe('<HistorySection />', () => {
    it('should render 7 <HistoryDiv />', () => {
        const wrapper = shallow(<HistorySection />);
        expect(wrapper.find(HistoryDiv)).toHaveLength(7);
    });
});
