'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { QuestionActions } from '../../../common/actions';

const AnswerInput = React.createClass({

  render() {
    if (!this.props.isAnswerInputOpened) {
      return null;
    }

    return (
      <div style={styles.mainContainer}>
        <div style={styles.headerContainer}>Your Answer</div>
        <textarea
          style={styles.textArea}
          value={this.props.answerInputText}
          onChange={(e) => this.props.setAnswerText(e.target.value)}
        />
        <div style={styles.bottomContainer}>
          <div onClick={() => this.props.sendAnswer(this.props.questionId)} className={'postbutton'} style={styles.postButton}><p>POST</p></div>
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
    padding: 15
  },

  headerContainer: {
    fontWeight: 'bold'
  },

  textArea: {
    resize: 'vertical',
    marginTop: 15,
    minHeight: 100
  },

  bottomContainer: {
    padding: 30,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },

  postButton: {
    cursor: 'pointer',
    height: 50,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: 15,
  }
};

const mapStateToProps = (state) => {
  return {
    isAnswerInputOpened: state.question.isAnswerInputOpened,
    answerInputText: state.question.answerInputText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAnswerText: (value) => {
      dispatch(QuestionActions.setAnswerText(value));
    },

    sendAnswer: (questionId) => {
      dispatch(QuestionActions.sendAnswer(questionId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerInput);
