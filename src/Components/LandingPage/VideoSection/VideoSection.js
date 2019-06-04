import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './css/VideoSection.module.css';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';


class VideoSection extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#AC7C44' }}>
                <TransitionDiv title={this.props.language === 'portuguese' ? '& Videos' :
                    this.props.language === 'english' ? '& Videos' :
                        this.props.language === 'french' ? '& Des vidéos' : ''} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language
    }
}

export default connect(mapStateToProps)(VideoSection);