'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import DashBoard from './modules/dashboard';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/DashBoard"/>
      <Route path="/DashBoard" component={DashBoard}/>
  </Router>,
  document.getElementById('app')
);
