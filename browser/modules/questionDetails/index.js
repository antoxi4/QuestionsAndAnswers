'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { QuestionActions } from '../../common/actions';

const QuestionDetails = React.createClass({
  componentWillMount() {
    this.props.getQuestionFromServer(this.props.match.params.questionId);
  },

  render() {

    return (
      <div style={styles.mainContainer}>
      <div style={styles.headerContainer}>
        <div style={styles.headerText}>
          <div>{this.props.questionData.title}</div>
        </div>
      </div>
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
    paddingBottom: 10,
    borderBottom: '1px solid #CFD8DC',
    paddingRight: '10%'
  },

  headerText: {
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
};

const mapStateToProps = (state) => {
  return {
    questionData: state.question.question
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestionFromServer: (questionId) => {
      dispatch(QuestionActions.getQuestionFromServer(questionId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);
