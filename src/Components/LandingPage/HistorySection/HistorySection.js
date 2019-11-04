import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actioncreators';

import classes from './css/HistorySection.module.css';
import IntersectionVisible from 'react-intersection-visible';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';
import HistoryDiv from '../../UI/historyDiv/historyDiv';

class HistorySection extends Component {


    onShow(entries) {
        this.props.changeSection('history');
        this.setState({show: true});
    }

    state = {
        show: false
    }

    render() {
        return (
            <>
                <IntersectionVisible onShow={(e) => this.onShow(e)}>
                    <div ref={this.props.forwardRef} className={classes.historyContainer}>
                        <TransitionDiv show={this.state.show} bgColor="#449376" title={this.props.language === 'portuguese' ? 'Histórico' :
                            this.props.language === 'english' ? 'History' : this.props.language === 'french' ? 'Historique' : ''} />
                        <HistoryDiv year="2018" />
                        <HistoryDiv year="2017" />
                        <HistoryDiv year="2016" />
                        <HistoryDiv year="2015" />
                        <HistoryDiv year="2014" />
                        <HistoryDiv year="2013" />
                        <HistoryDiv year="2012" />
                    </div>
                </IntersectionVisible>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeSection: (section) => dispatch(actions.changeSection(section))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistorySection);