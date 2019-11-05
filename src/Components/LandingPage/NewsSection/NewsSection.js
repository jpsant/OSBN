import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../../../store/actions/actioncreators';

import classes from './css/NewsSection.module.css'
import IntersectionVisible from 'react-intersection-visible';
import { Fade } from 'react-reveal';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';
import NewsCard from '../../UI/newsCard/newsCard';

class NewsSection extends Component {

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/noticias/' + this.state.language + '.json')
            .then(response => {
                this.setState({ noticias: response.data });
            });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.language !== this.state.language) {
            axios.get('https://osbn-a36f9.firebaseio.com/noticias/' + nextProps.language + '.json')
                .then(response => {
                    this.setState({ noticias: response.data, language: nextProps.language });
                });
        }
    }

    componentWillUnmount() {
        this.clear();
    }

    state = {
        noticias: null,
        language: this.props.language,
        show: false
    }

    clear = () => {
        this.setState({ noticias: null, language: null })
    }

    onShow(entries) {
        this.props.changeSection('news');
        this.setState({ show: true });
    }

    render() {

        let cards = null;
        if (this.state.noticias !== null) {
            let items = this.state.noticias;
            cards = items.map(item => {
                return <NewsCard disabled={false} img={item.imagem} language={this.state.language} id={item.id} key={item.id} content={item.resumo} title={item.titulo} date={item.data} />
            })
        }

        return (
            <IntersectionVisible onShow={e => this.onShow(e)}>
                <div ref={this.props.forwardRef} className={classes.newsDiv}>
                    <TransitionDiv show={this.state.show} bgColor="#c76d2b" title={this.props.language === 'portuguese' ? 'Notícias' :
                        this.props.language === 'english' ? 'News' : this.props.language === 'french' ? 'Nouvelles' : ''} />
                    <Fade>
                        <div className={classes.container}>
                            <div className={classes.newsAlert}>
                                <div className={classes.hatContainer}>
                                    <Fade bottom>
                                        <h1 className={classes.hat}>&</h1>
                                    </Fade>
                                </div>
                                <div className={classes.textContainer}>
                                    <h2 className={classes.text}>No momento não há notícias disponíveis</h2>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </IntersectionVisible>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsSection);