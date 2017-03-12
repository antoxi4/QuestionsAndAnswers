'use strict';

import { ADD_QUESTION_STORE } from './actionTypes';
import { AddQuestionInitialState } from '../reducers/initialStates';
import Constants from '../constants';

const apiURL = Constants.apiURL;

function storeData(data) {
  return {
    type: ADD_QUESTION_STORE,
    payload: data
  };
}

export function resetState() {
  return storeData(AddQuestionInitialState);
}

export function setQuestionTitle(title) {
  return storeData({
    questionTitle: title
  });
}

export function setQuestionNotes(text) {
  return storeData({
    questionNotes: text
  });
}

export function sendQuestion(history) {
  return (dispatch, getState) => {
    const body = {
      userId: 5,
      questionTitle: getState().addquestion.questionTitle,
      questionNotes: getState().addquestion.questionNotes
    };

    return fetch(`${apiURL}/question`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((response) => (response.json()))
    .then((response) => {
      history.goBack();
    }).catch((error) => {
      console.error(`Send Answer :: ${error.message}`);
    });
  };
}
