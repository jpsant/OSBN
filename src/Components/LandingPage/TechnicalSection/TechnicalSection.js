import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../../../store/actions/actioncreators';

import classes from './css/TechnicalSection.module.css';
import IntersectionVisible from 'react-intersection-visible';

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

    onShow(entries) {
        this.props.changeSection('technical');
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
            <IntersectionVisible onShow={e => this.onShow(e)}>
                <div ref={this.props.forwardRef} style={{ backgroundColor: '#2b765a', display: 'grid' }}>
                    {/* <TransitionDiv bgColor="#449376" title={this.props.language === 'portuguese' ? 'Técnica' :
                        this.props.language === 'english' ? 'Technical' :
                            this.props.language === 'french' ? 'Technique' : ''} />
                    <div className={classes.technicalContainer}>
                        <div className={classes.textContainer1}>
                            <h1>{this.props.language === 'portuguese' ? 'Mapa de Palco' :
                                this.props.language === 'english' ? 'Stage Map' :
                                    this.props.language === 'french' ? 'Plan de la scène' : ''}</h1>

                            <button className={classes.button}>{this.props.language === 'portuguese' ? 'Realizar Download' :
                                this.props.language === 'english' ? 'Download' :
                                    this.props.language === 'french' ? 'Télécharger' : ''}</button>
                        </div>
                        <div className={classes.textContainer2}>
                            <h1>{this.props.language === 'portuguese' ? 'Rider Técnico' :
                                this.props.language === 'english' ? 'Technical Rider' :
                                    this.props.language === 'french' ? 'Fiche Technique' : ''}</h1>

                            <button className={classes.button}>{this.props.language === 'portuguese' ? 'Realizar Download' :
                                this.props.language === 'english' ? 'Download' :
                                    this.props.language === 'french' ? 'Télécharger' : ''}</button>
                        </div>
                    </div> */}
                    <TransitionDiv bgColor="#449376" title={this.props.language === 'portuguese' ? 'Repertório' :
                        this.props.language === 'english' ? 'Repertoire' :
                            this.props.language === 'french' ? 'Répertoire' : ''} />
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
            </IntersectionVisible>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(TechnicalSection);