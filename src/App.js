import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import LandingPage from './Components/LandingPage/FullPage/FullPage';
import Gallery from './Components/Gallery/Gallery';
import FullPost from './Components/Posts//NewsPost';


class App extends Component {
  render() {
      // SE LIGAR NA SEQUENCIA DAS ROUTES!
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/news/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token
  }
}

export default withRouter(connect(mapStateToProps)(App));
