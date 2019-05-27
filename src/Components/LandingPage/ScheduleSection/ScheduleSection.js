import React, { Component } from 'react';
import classes from './css/ScheduleSection.module.css';
import axios from 'axios';
import { connect } from 'react-redux';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';
import ScheduleDiv from '../../UI/scheduleDiv/scheduleDiv';

class ScheduleSection extends Component {

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/agenda.json')
        .then(response => {
            this.setState({agenda: response.data});
        });
    }

    state = {
        agenda: null
    }

    render() {
    
        let cards = null;
        if (this.state.agenda !== null) {
            let items = this.state.agenda;
            cards = items.map(item =>{
                return <ScheduleDiv key={item.id} date={item.data} event={item.evento} local={item.local} />
            })
        }

        return (
            <div className={classes.scheduleContainer}>
                <TransitionDiv title={this.props.language === 'portuguese' ? '& Agenda' :
                this.props.language === 'english' ? '& Schedule' : 
                this.props.language === 'french' ? ' & Agenda' : ''} />
                <div className={classes.container}>
                    {cards}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language
    }
}

export default connect(mapStateToProps) (ScheduleSection);