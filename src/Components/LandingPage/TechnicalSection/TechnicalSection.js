import React, { Component } from 'react';
import axios from 'axios';
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
            <>
            <TransitionDiv title="& Técnica" />
                <div className={classes.technicalContainer}>
                    <h2>Parte Técnica</h2>
                </div>
                <TransitionDiv title="& Repertório" />
                <div className={classes.musicContainer}>
                    <div className={classes.table}>
                        <div className={classes.music}>
                            <h2>Música <span>&</span></h2>
                        </div>
                        <div className={classes.composer}>
                            <h2>Compositor <span>&</span></h2>
                        </div>
                    </div>
                    <div className={classes.content}>
                        {block}
                    </div>
                </div>
            </>
        )
    }
}

export default TechnicalSection;