import React, { Component } from 'react';
import axios from 'axios';
import classes from './css/NewsSection.module.css'
import { connect } from 'react-redux';
import IntersectionVisible from 'react-intersection-visible';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';
import NewsCard from '../../UI/newsCard/newsCard';

class NewsSection extends Component {


    onShow(entries) {
        console.log('news');
    }

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

    state = {
        noticias: null,
        language: 'portuguese'
    }

    render() {

        let cards = null;
        if (this.state.noticias !== null) {
            let items = this.state.noticias;
            cards = items.map(item => {
                return <NewsCard img={item.imagem} language={this.state.language} key={item.id} content={item.resumo} title={item.titulo} date={item.data} />
            })
        }

        return (
            <IntersectionVisible onShow={e => this.onShow(e)}>
                <div className={classes.newsDiv}>
                    <TransitionDiv title={this.props.language === 'portuguese' ? '& Notícias' :
                        this.props.language === 'english' ? '& News' : this.props.language === 'french' ? '& Nouvelles' : ''} />
                    <div className={classes.container}>
                        {cards}
                    </div>
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

export default connect(mapStateToProps)(NewsSection);