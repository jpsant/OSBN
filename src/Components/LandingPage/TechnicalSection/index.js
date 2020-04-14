import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../../../store/actions/actioncreators';

import './styles.scss';
import IntersectionVisible from 'react-intersection-visible';

import TransitionDiv from '../../UI/transitionDiv';
import Table from '../../UI/table/table';

class TechnicalSection extends Component {

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/repertorio.json')
            .then(response => {
                this.setState({ list: response.data })
            });
    }

    state = {
        list: null,
        show: false
    }

    onShow(entries) {
        this.props.changeSection('technical');
        this.setState({show: true})
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
                    <div className="technical-container">
                        <div className="technical-container__textContainer1">
                            <h1>{this.props.language === 'portuguese' ? 'Mapa de Palco' :
                                this.props.language === 'english' ? 'Stage Map' :
                                    this.props.language === 'french' ? 'Plan de la scène' : ''}</h1>

                            <button className="technical-container__textContainer1-button">{this.props.language === 'portuguese' ? 'Realizar Download' :
                                this.props.language === 'english' ? 'Download' :
                                    this.props.language === 'french' ? 'Télécharger' : ''}</button>
                        </div>
                        <div className="technical-container__textContainer2">
                            <h1>{this.props.language === 'portuguese' ? 'Rider Técnico' :
                                this.props.language === 'english' ? 'Technical Rider' :
                                    this.props.language === 'french' ? 'Fiche Technique' : ''}</h1>

                            <button className="technical-container__textContainer2-button">{this.props.language === 'portuguese' ? 'Realizar Download' :
                                this.props.language === 'english' ? 'Download' :
                                    this.props.language === 'french' ? 'Télécharger' : ''}</button>
                        </div>
                    </div> */}
                    <TransitionDiv show={this.state.show} bgColor="#449376" title={this.props.language === 'portuguese' ? 'Repertório' :
                        this.props.language === 'english' ? 'Repertoire' :
                            this.props.language === 'french' ? 'Répertoire' : ''} />
                    <div className="musicContainer">
                        <div className="musicContainer__table">
                            <div className="musicContainer__table-music">
                                <h2>{this.props.language === 'portuguese' ? 'Música' :
                                    this.props.language === 'english' ? 'Music' :
                                        this.props.language === 'french' ? 'Musique' : ''} <span>&</span></h2>
                            </div>
                            <div className="musicContainer__table-composer">
                                <h2>{this.props.language === 'portuguese' ? 'Compositor' :
                                    this.props.language === 'english' ? 'Composer' :
                                        this.props.language === 'french' ? 'Compositeur' : ''}<span>&</span></h2>
                            </div>
                        </div>
                        <div className="musicContainer__content">
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