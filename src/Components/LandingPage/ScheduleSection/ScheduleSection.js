import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../../../store/actions/actioncreators';

import classes from './css/ScheduleSection.module.css';
import IntersectionVisible from 'react-intersection-visible';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';
import ScheduleDiv from '../../UI/scheduleDiv/scheduleDiv';

class ScheduleSection extends Component {

    onShow(entries) {
        this.props.changeSection('schedule')
    }

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/agenda.json')
            .then(response => {
                this.setState({ agenda: response.data });
            });
    }

    componentWillUnmount() {
        this.clear();
    }

    state = {
        agenda: null
    }

    clear = () => {
        this.setState({agenda: null});
    }

    render() {

        let cards = null;
        if (this.state.agenda !== null) {
            let items = this.state.agenda;
            cards = items.map(item => {
                return <ScheduleDiv key={item.id} date={item.data} event={item.evento} local={item.local} />
            })
        }

        return (
            <IntersectionVisible onShow={e => this.onShow(e)}>
                <div ref={this.props.forwardRef} className={classes.scheduleContainer}>
                    <TransitionDiv title={this.props.language === 'portuguese' ? 'Agenda' :
                        this.props.language === 'english' ? 'Schedule' :
                            this.props.language === 'french' ? ' Agenda' : ''} />
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

const mapDispatchToProps = dispatch => {
    return {
        changeSection: (section) => dispatch(actions.changeSection(section))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleSection);