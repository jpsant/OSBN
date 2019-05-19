import React, { Component } from 'react';
import classes from './css/ScheduleSection.module.css';
import axios from 'axios';

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
        console.log(this.state.agenda);
        return (
            <>
                <TransitionDiv title="& Agenda" />
                <div className={classes.container}>
                    <ScheduleDiv/>
                </div>
            </>
        );
    }
}

export default ScheduleSection;