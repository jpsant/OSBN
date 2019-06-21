import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PageManager extends Component {
    render() {
        let redirect = null;
        if (this.props.token === null) {
            redirect = <Redirect to="/" />
        }
        return (
            <>
                {redirect}
                <h1>pageManagement!</h1>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.idToken
    }
}

export default connect(mapStateToProps)(PageManager);