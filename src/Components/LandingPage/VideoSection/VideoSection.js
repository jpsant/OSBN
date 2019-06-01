import React, { Component } from 'react';
import classes from './css/VideoSection.module.css';
import { connect } from 'react-redux';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';

class VideoSection extends Component {
    render() {
        return (
            <div>
                <TransitionDiv title={this.props.language === 'portuguese' ? 'Videos &' :
                this.props.language === 'english' ? 'Videos &' : 
                this.props.language === 'french' ? 'Des vidéos &' : ''} />
                <h1>Videosection!</h1>
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