import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import LandingPage from './Components/LandingPage/FullPage/FullPage';
import Gallery from './Components/Gallery/Gallery';
import FullPost from './Components/Posts//NewsPost';
import Login from './Components/Admin/Login/Login';
import PageManager from './Components/Admin/PageManager/PageManager';

class App extends Component {
  render() {
    // SE LIGAR NA SEQUENCIA DAS ROUTES!

    let routes = (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/news/:id" exact component={FullPost} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.token) {
      routes = (
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/admin/pageManagement" component={PageManager} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/news/:id" exact component={FullPost} />
          <Route path="/login" exact component={Login} />
        </Switch>
      );
    }


    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token !== null
  }
}

export default withRouter(connect(mapStateToProps)(App));
