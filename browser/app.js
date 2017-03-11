'use strict';

import React from 'react';
import MainPanel from './modules/mainPanel';
import DashBoard from './modules/dashboard';
import QuestionDetails from './modules/questionDetails';
import store from './common/store';
import { Provider } from 'react-redux'
import {
  IndexRoute,
  Redirect,
  BrowserRouter as Router,
  IndexRedirect,
  Route,
  Link
} from 'react-router-dom';

const App = () => (
  <Provider store={store}>
    <div style={styles.mainContainer}>
      <MainPanel/>
      <div style={styles.contentContainer}>
        <Redirect to="/dashboard"/>
        <Route exact path='/dashboard' component={DashBoard}/>
        <Route exact path='/quest/:questionId' component={QuestionDetails}/>
      </div>
    </div>
  </Provider>
);

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },

  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 110,
    marginLeft: 100,
    marginRight: 100
  },

};

export default App;
