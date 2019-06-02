import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './css/VideoSection.module.css';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';
import YouTube from 'react-youtube';

class VideoSection extends Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0
            }
        };
        return (
            <div style={{ backgroundColor: '#AC7C44' }}>
                <TransitionDiv title={this.props.language === 'portuguese' ? '& Videos' :
                    this.props.language === 'english' ? '& Videos' :
                        this.props.language === 'french' ? '& Des vidéos' : ''} />
                <div className={classes.videoContainer}>
                    <div className={classes.video1}>
                        <YouTube
                            videoId="gcLEq0KySI4"
                            opts={opts}
                            onReady={this._onReady}
                            className={classes.videoPlayer1}
                        />
                    </div>
                    <div className={classes.video2}>
                        <YouTube
                            videoId="FrOC28v9d7w"
                            opts={opts}
                            onReady={this._onReady}
                            className={classes.videoPlayer2}
                        />
                    </div>
                </div>
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