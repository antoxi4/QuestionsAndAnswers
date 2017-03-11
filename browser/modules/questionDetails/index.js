'use strict';

import React from 'react';
import AnswerInput from './components/answerInput';
import { connect } from 'react-redux';
import { QuestionActions } from '../../common/actions';

const QuestionDetails = React.createClass({
  componentWillMount() {
    this.props.getQuestionFromServer(this.props.match.params.questionId);
  },

  renderAnswers(answersCount) {
    if (answersCount > 0) {
      return this.props.questionData.answers.map((answer, idx) => (
        <div key={answer.id} style={styles.answerContainer}>
          <div style={styles.answerHeader}>
            <div>Posted by: {answer.userName}</div>
          </div>
          {answer.answer}
        </div>
      ));
    }

    return null;
  },

  render() {
    const answersCount = this.props.questionData.answers ? this.props.questionData.answers.length : 0;

    return (
      <div style={styles.mainContainer}>
        <div style={styles.headerContainer}>
          <div style={styles.headerText}>
            <div>{this.props.questionData.title}</div>
          </div>
        </div>
        <div style={styles.notesContainer}>
          <div style={styles.notesText}>{this.props.questionData.notes}</div>
        </div>
        <div style={styles.answersContainer}>
          <div style={styles.answerHeaderContainer}>
            <div style={styles.headerText}>
              <div>{answersCount} Answers</div>
            </div>
            <div>
              <div className={"links"} onClick={this.props.openAnswerInput} style={styles.actionContainer}>Add Answer</div>
            </div>
          </div>
          <AnswerInput questionId={this.props.match.params.questionId}/>
          <div style={styles.answers}>
            {this.renderAnswers(answersCount)}
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
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottom: '1px solid #CFD8DC',
    paddingRight: '10%',
    fontWeight: 'bold'
  },

  headerText: {
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },

  notesContainer: {
    padding: 15
  },

  notesText: {
    width: '65%'
  },

  answersContainer: {
    marginTop: 20
  },

  answers: {

  },

  answerContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    borderBottom: '1px solid #CFD8DC',
  },

  answerHeaderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottom: '1px solid #CFD8DC',
    paddingRight: '10%',
    fontWeight: 'bold'
  },

  answerHeader: {
    paddingBottom: 15,
    color: '#FF5722'
  },

  actionContainer: {
    paddingLeft: 10,
    cursor: 'pointer',
    paddingRight: 10,
  }
};

const mapStateToProps = (state) => {
  return {
    questionData: state.question.question,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestionFromServer: (questionId) => {
      dispatch(QuestionActions.getQuestionFromServer(questionId));
    },
    openAnswerInput: () => {
      dispatch(QuestionActions.openAnswerInput());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);
