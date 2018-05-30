import React, { Component } from 'react';
import { browserHistory as history } from 'react-router';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div id="App">
          <Routes />
          {process.env.NODE_ENV !== 'production' && <DevTools />}
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);