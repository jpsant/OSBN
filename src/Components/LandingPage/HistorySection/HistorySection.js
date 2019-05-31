import React, { Component } from 'react';
import classes from './css/HistorySection.module.css';
import { connect } from 'react-redux';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';
import HistoryDiv from '../../UI/historyDiv/historyDiv';

class HistorySection extends Component {
    render() {
        return (
            <>
                <div className={classes.historyContainer}>
                    <TransitionDiv title={this.props.language === 'portuguese' ? '& Histórico' :
                    this.props.language === 'english' ? '& History' : this.props.language === 'french' ? '& Historique' : ''} />
                    <HistoryDiv year="2017" />
                    <HistoryDiv year="2016" />
                    <HistoryDiv year="2015" />
                    <HistoryDiv year="2014" />
                    <HistoryDiv year="2013" />
                    <HistoryDiv year="2012" />
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language
    }
}

export default connect(mapStateToProps)(HistorySection);