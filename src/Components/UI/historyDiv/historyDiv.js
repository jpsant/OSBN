import React, { Component } from 'react';
import axios from 'axios';
import classes from './css/historyDiv.module.css';
import { connect } from 'react-redux';

import EventDiv from '../eventSelector/eventSelector';
import { Fade } from 'react-reveal';

class HistoryDiv extends Component {

    state = {
        history: [],
        language: 'portuguese'
    }

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/historico/' + this.state.language + '/' + this.props.year + '.json')
            .then(response => {
                this.setState({ history: response.data });
            });
    }

    //SE OS PROPS RECEBIDOS FOREM DIFERENTES DO ATUAL ELE FAZ UMA NOVA REQUEST.
    componentWillReceiveProps(nextProps) {
        this.setState({ history: [] })
        if (nextProps.language !== this.state.language) {
            axios.get('https://osbn-a36f9.firebaseio.com/historico/' + nextProps.language + '/' + this.props.year + '.json')
                .then(response => {
                    this.setState({ history: response.data, language: nextProps.language });
                });

        }
    }

    componentWillUnmount() {
        this.clear();
    }

    clear = () => {
        this.setState({ history: null })
    }

    render() {

        let cards = null;
        if (this.state.history !== null) {
            let items = this.state.history;
            cards = items.map(item => {
                return <EventDiv date={item.data} event={item.evento} local={item.uf} key={item.key} />
            })
        }

        return (
            <>
                <div className={classes.container} id="historia">
                    <Fade top>
                        <div className={classes.yearDiv}>
                            <h1>{this.props.year}</h1>
                        </div>
                    </Fade>
                    <Fade>
                        <div className={classes.eventDiv}
                            style={{ minHeight: this.state.history !== null && this.state.history.length === 1 ? '6.5em' : '17em' }}>
                            {cards}
                        </div>
                    </Fade>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language
    }
}

export default connect(mapStateToProps)(HistoryDiv);