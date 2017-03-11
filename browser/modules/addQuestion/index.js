'use strict';

import React from 'react';

const AddQuestion = React.createClass({

  render() {
    return (
      <div style={styles.mainContainer}>
        <div style={styles.titleContainer}>
          <div>Title</div>
          <input
            style={styles.titleInput}
            value={this.props.questionTitle}
            placeholder={'What you question? Be specific.'}
          />
        </div>
        <div style={styles.questionContainer}>
          <textarea
            value={this.props.questionText}
            style={styles.textarea}
          />
        </div>
        <div style={styles.bottomContainer}>
          <div
            onClick={() => this.props.sendAnswer(this.props.questionId)}
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

export {AddQuestion as default};
