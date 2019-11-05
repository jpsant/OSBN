import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import LazyImport from './lazyLoading/lazyImport';

// utilizando esse componente auxiliar para 'lazy load' os containers.

const LandingPage = LazyImport(() => {
  return import ('./Components/LandingPage/FullPage/FullPage');
})

const Gallery = LazyImport(() => {
  return import ('./Components/Gallery/Gallery');
})

const FullPost = LazyImport(() => {
  return import ('./Components/Posts/NewsPost');
})

const Login = LazyImport(() => {
  return import ('./Components/Admin/Login/Login');
})

const PageManager = LazyImport(() => {
  return import ('./Components/Admin/PageManager/PageManager');
})

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
