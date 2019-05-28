import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import classes from './css/TechnicalSection.module.css';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';
import Table from '../../UI/table/table';

class TechnicalSection extends Component {

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/repertorio.json')
            .then(response => {
                this.setState({ list: response.data })
            });
    }

    state = {
        list: null
    }

    render() {

        let block = null;
        if (this.state.list !== null) {
            let items = this.state.list;
            block = items.map(item => {
                return <Table key={item.id} music={item.musica} composer={item.compositor} />
            })
        }

        return (
            <div style={{backgroundColor: '#AC7C44'}}>
                <TransitionDiv title={this.props.language === 'portuguese' ? '& Técnica' :
                    this.props.language === 'english' ? '& Technical' :
                    this.props.language === 'french' ? '& Technique' : ''} />
                <div className={classes.technicalContainer}>
                    <h2>Parte Técnica</h2>
                </div>
                <TransitionDiv title={this.props.language === 'portuguese' ? '& Repertório' :
                    this.props.language === 'english' ? '& Repertoire' :
                    this.props.language === 'french' ? '& Répertoire' : ''} />
                <div className={classes.musicContainer}>
                    <div className={classes.table}>
                        <div className={classes.music}>
                            <h2>{this.props.language === 'portuguese' ? 'Música' :
                                this.props.language === 'english' ? 'Music' :
                                this.props.language === 'french' ? 'Musique' : ''} <span>&</span></h2>
                        </div>
                        <div className={classes.composer}>
                            <h2>{this.props.language === 'portuguese' ? 'Compositor' :
                                this.props.language === 'english' ? 'Composer' : 
                                this.props.language === 'french' ? 'Compositeur' : ''}<span>&</span></h2>
                        </div>
                    </div>
                    <div className={classes.content}>
                        {block}
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

export default connect(mapStateToProps)(TechnicalSection);