import React, { Component } from 'react';
import axios from 'axios';
import classes from './css/historyDiv.module.css';

import EventDiv from '../eventSelector/eventSelector';

class historyDiv extends Component {

    state = {
        history: null
    }

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/historico/' + this.props.year + '.json')
            .then(response => {
                this.setState({ history: response.data });
            })
    }

    render() {

        let cards = null;
        if (this.state.history !== null) {
            let items = this.state.history;
            cards = items.map(item => {
                return <EventDiv date={item.data} event={item.evento} local={item.uf} key={item.key} />
            })
        }


        // console.log(this.state.history);

        return (
            <>
                <div className={classes.container}>
                    <div className={classes.yearDiv}> <h1>{this.props.year}</h1> </div>
                    <div className={classes.eventDiv}>
                        { cards }
                    </div>
                </div>
            </>
        );
    }
}

export default historyDiv;