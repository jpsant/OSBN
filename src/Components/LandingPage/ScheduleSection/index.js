import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../../../store/actions/actioncreators';

import './styles.scss';
import IntersectionVisible from 'react-intersection-visible';

import TransitionDiv from '../../UI/transitionDiv';
import ScheduleDiv from '../../UI/scheduleDiv';

class ScheduleSection extends Component {

    onShow() {
        this.props.changeSection('schedule');
        this.setState({show: true})
    }

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/agenda.json')
            .then(response => {
                this.setState({ agenda: response.data })
            });
    }

    componentWillUnmount() {
        this.clear();
    }

    state = {
        agenda: null,
        show: false
    }

    clear = () => {
        this.setState({agenda: null});
    }

    render() {

        let cards = null;
        if (this.state.agenda !== null) {
            let items = this.state.agenda;
            cards = items.map(item => {
                return <ScheduleDiv language={this.props.language} link={item.link} key={item.id} date={item.data} event={item.evento} local={item.local} maps={item.maps}/>
            })
        }

        return (
            <IntersectionVisible onShow={e => this.onShow(e)}>
                <div ref={this.props.forwardRef} className="scheduleContainer">
                    <TransitionDiv show={this.state.show} bgColor="#d35523" title={this.props.language === 'portuguese' ? 'Agenda' :
                        this.props.language === 'english' ? 'Schedule' :
                            this.props.language === 'french' ? ' Agenda' : ''} />
                    <div className="scheduleContainer__container">
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