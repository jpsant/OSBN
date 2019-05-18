import React, { Component } from 'react';
import classes from './css/HistorySection.module.css';

import TransitionDiv from '../../UI/titleDivs/history/historyDiv';
import HistoryDiv from '../../UI/historyDiv/historyDiv';

class HistorySection extends Component {
    render() {
        return (
            <div className={classes.historyContainer}> 
                <TransitionDiv title="& Histórico" />
                <HistoryDiv year="2017" />
                <HistoryDiv year="2016" />
                <HistoryDiv year="2015"/>
                <HistoryDiv year="2014"/>
            </div>
        );
    }
}

export default HistorySection;