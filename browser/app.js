'use strict';

import React from 'react';
import MainPanel from './modules/mainPanel';
import DashBoard from './modules/dashboard';
import QuestionDetails from './modules/questionDetails';
import AddQuestion from './modules/addQuestion';
import {
  Redirect,
  Route
} from 'react-router-dom';

const App = ({...props}) => (
  <div style={styles.mainContainer}>
    <MainPanel {...props}/>
    <div style={styles.contentContainer}>
      <Redirect to='/dashboard'/>
      <Route path='/dashboard' component={DashBoard}/>
      <Route path='/questions/view/:questionId' component={QuestionDetails}/>
      <Route path='/questions/ask' component={AddQuestion}/>
    </div>
  </div>
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
    alignSelf: 'center',
    minWidth: '800px',
    maxWidth: '70%',
    marginTop: 110,
    marginLeft: 100,
    marginRight: 100
  },

};

export default App;
