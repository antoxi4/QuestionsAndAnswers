'use strict';

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import QuestionsList from '../questionsList';
import FilterBar from './components/filterBar';

const DashBoard = React.createClass({

  render() {
    return (
      <div style={styles.mainContainer}>
        <div style={styles.headerContainer}>
          <div style={styles.headerText}>
            <div>Latest Questions</div>
          </div>
          <FilterBar />
        </div>
        <QuestionsList/>
      </div>
    );
  }
});

const styles = {
  mainContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },

  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid #CFD8DC',
    paddingRight: '10%'
  },

  headerText: {
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },

  filterContainer: {
    display: 'flex',
    flexDirection: 'row'
  },

  activeFilterItem: {
    borderLeft: '1px solid #CFD8DC',
    borderRight: '1px solid #CFD8DC',
    borderTop: '2px solid #FFA726',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },

  filterItem: {
    cursor: 'pointer',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  }
};

export {DashBoard as default};
