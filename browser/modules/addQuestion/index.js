'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { AddQuestionActions } from '../../common/actions';

const AddQuestion = React.createClass({

  componentWillMount() {
    this.props.resetState();
  },

  render() {
    return (
      <div style={styles.mainContainer}>
        <div style={styles.titleContainer}>
          <div>Title</div>
          <input
            style={styles.titleInput}
            value={this.props.questionTitle}
            placeholder={'What you question? Be specific.'}
            onChange={(e) => this.props.setQuestionTitle(e.target.value)}
          />
        </div>
        <div style={styles.questionContainer}>
          <textarea
            value={this.props.questionNotes}
            onChange={(e) => this.props.setQuestionNotes(e.target.value)}
            style={styles.textarea}
          />
        </div>
        <div style={styles.bottomContainer}>
          <div
            onClick={() => this.props.sendQuestion(this.props.history)}
            className={"postbutton"}
            style={styles.postButton}
          >
            <p>ASK</p>
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

  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  titleInput: {
    display: 'flex',
    fontSize: 16,
    marginLeft: 15,
    height: 30,
    flex: 1
  },

  questionContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 15
  },

  textarea: {
    resize: 'vertical',
    minHeight: 300,
    fontSize: 15,
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
    borderRadius: 15
  }
};

const mapStateToProps = (state) => {
  return {
    questionTitle: state.addquestion.questionTitle,
    questionNotes: state.addquestion.questionNotes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetState: () => {
      dispatch(AddQuestionActions.resetState());
    },
    setQuestionTitle: (title) => {
      dispatch(AddQuestionActions.setQuestionTitle(title));
    },
    setQuestionNotes: (text) => {
      dispatch(AddQuestionActions.setQuestionNotes(text));
    },
    sendQuestion: (history) => {
      dispatch(AddQuestionActions.sendQuestion(history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
