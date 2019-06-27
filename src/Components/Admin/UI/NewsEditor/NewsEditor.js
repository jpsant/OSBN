import React, { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import axios from 'axios';
import classes from './css/NewsEditor.module.css';

import NewsEditorCard from '../components/newsEditorCards/newsEditorCards';

class NewsEditor extends Component {

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/noticias.json')
            .then(response => {
                this.setState({ brPosts: response.data.portuguese, enPosts: response.data.english, frPosts: response.data.french })
            })
    }

    state = {
        brPosts: null,
        enPosts: null,
        frPosts: null
    }

    render() {
        let brPosts = null;
        let enPosts = null;
        let frPosts = null;
        if (this.state.brPosts && this.state.enPosts && this.state.frPosts) {
            // console.log(this.state.brPosts);
            // console.log(this.state.enPosts);
            // console.log(this.state.frPosts);
            brPosts = this.state.brPosts.map(item => {
                return <NewsEditorCard key={item.id} title={item.titulo} content={item.resumo} />
            })

            enPosts = this.state.enPosts.map(item => {
                return <NewsEditorCard key={item.id} title={item.titulo} content={item.resumo} />
            })

            frPosts = this.state.frPosts.map(item => {
                return <NewsEditorCard key={item.id} title={item.titulo} content={item.resumo} />
            })
        }

        return (
            <>
                <div className={classes.container}>

                    <div className={classes.titleContainer}>
                        <h1>Editor de Notícias!</h1>
                        <h2>Selecione a notícia que você deseja editar:</h2>
                    </div>

                    <div className={classes.brPosts}>
                        <div className={classes.titleContainer}>
                            <h1 className={classes.title}>Português!</h1>
                        </div>

                        <div className={classes.postsContainer}>
                            {brPosts}
                        </div>
                    </div>
                    <div className={classes.enPosts}>
                        <div className={classes.titleContainer}>
                            <h1 className={classes.title}>Inglês!</h1>
                        </div>

                        <div className={classes.postsContainer}>
                            {enPosts}
                        </div>
                    </div>
                    <div className={classes.frPosts}>
                        <div className={classes.titleContainer}>
                            <h1 className={classes.title}>Francês!</h1>
                        </div>

                        <div className={classes.postsContainer}>
                            {frPosts}
                        </div>
                    </div>
                    <button onClick={this.props.clicked}>votar</button>
                </div>
            </>
        )
    }
}

export default NewsEditor;