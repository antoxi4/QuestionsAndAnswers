'use strict';

import React from 'react';
import {
  Link
} from 'react-router-dom';

const RowItem = React.createClass({

  render() {
    return (
      <div style={styles.mainContainer}>
        <div style={styles.questionInfo}>
          <div style={styles.infoColumn}>
            <div>{this.props.data.answers.length}</div>
            <div>answers</div>
          </div>
        </div>
        <div className={'links'} style={styles.questionTitleContainer}>
          <Link to={`/quest/${this.props.data.id}`}>{this.props.data.title}</Link>
        </div>
      </div>
    );
  }
});

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottom: '1px solid #CFD8DC',
  },

  questionInfo: {
    display: 'flex',
    flexDirection: 'row'
  },

  infoColumn: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    fontSize: 12,
    color: '#607D8B'
  },

  questionTitleContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    paddingLeft: 20
  }
};

export {RowItem as default};
