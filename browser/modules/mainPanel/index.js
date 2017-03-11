'use strict';

import React from 'react'

const MainPanel = React.createClass({
  render() {
    return (
      <div style={styles.mainContainer}>
        <div>Questions And Answers</div>
        <div style={styles.toolContainer}>
          <div className={"links"} style={styles.actionContainer}>Add Questions</div>
          <div className={"links"} style={styles.actionContainer}>Sign In</div>
        </div>
      </div>
    );
  }
});

const styles = {
  mainContainer: {
    display: 'flex',
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#263238',
    color: '#ECEFF1'
  },

  toolContainer: {
    display: 'flex',
    flexDirection: 'row'
  },

  actionContainer: {
    paddingLeft: 10,
    cursor: 'pointer',
    paddingRight: 10,
  }
};

export {MainPanel as default};
