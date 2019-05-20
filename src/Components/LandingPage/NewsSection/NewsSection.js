import React, { Component } from 'react';
import axios from 'axios';
import classes from './css/NewsSection.module.css'

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';
import NewsCard from '../../UI/newsCard/newsCard';

class NewsSection extends Component {

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/noticias.json')
            .then(response => {
                this.setState({ noticias: response.data });
            });
    }

    state = {
        noticias: null
    }

    render() {

        let cards = null;
        if (this.state.noticias !== null) {
            let items = this.state.noticias;
            cards = items.map(item => {
                return <NewsCard key={item.id} content={item.resumo} title={item.titulo} date={item.data} />
            })
        }

        return (
            <>
                <TransitionDiv title="& Notícias" />
                <div className={classes.container}>
                    {cards}
                </div>
            </>
        );
    }
}

export default NewsSection;