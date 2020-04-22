import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './global.scss';

import LazyImport from './lazyLoading/lazyImport';
import Helmet from 'react-helmet';

// utilizing 'lazy-loading' to load part of the web-site at the time.

const LandingPage = LazyImport(() => {
  return import('./Components/LandingPage/FullPage');
})

const Gallery = LazyImport(() => {
  return import('./Components/Gallery');
})

const Login = LazyImport(() => {
  return import('./Components/Admin/Login');
})

const PageManager = LazyImport(() => {
  return import('./Components/Admin/PageManager');
})

const DvdSection = LazyImport(() => {
  return import('./Components/LandingPage/DvdSection/DvdSection');
})

class App extends Component {
  render() {
    // OBS: the routes sequence.

    let routes = (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/login" exact component={Login} />
        <Route path="/dvd" exact component={DvdSection} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.token) {
      routes = (
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/admin/pageManagement" component={PageManager} />
          <Route path="/login" exact component={Login} />
          <Route path="/dvd" exact component={DvdSection} />
          <Redirect to="/" />
        </Switch>
      );
    }


    return (
      <div className="App">
        <Helmet>
          <title>Orquestra Sanfônica Balaio Nordeste</title>
          <meta name="description" content="Website da Orquestra Sanfônica Balaio Nordeste"></meta>
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
        </Helmet>
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
