'use strict';

import React from 'react';
import RowItem from './components/rowItem';
import { connect } from 'react-redux';
import { QuestionsListActions } from '../../common/actions';

const QuestionsList = React.createClass({
  componentWillMount() {
    this.props.getQuestionsFromServer();
  },

  renderRows() {
    return this.props.questions.map((question, idx) => (
      <RowItem key={idx} data={question} />
    ));
  },

  render() {
    return (
      <div style={styles.mainContainer}>
        {this.renderRows()}
      </div>
    );
  }
});

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column'
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

const mapStateToProps = (state) => {
  return {
    questions: state.questionslist.questions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestionsFromServer: () => {
      dispatch(QuestionsListActions.getQuestionsFromServer());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
