'use strict';

import { QUESTIONS_ITEM_STORE } from './actionTypes';
import Constants from '../constants';

const apiURL = Constants.apiURL;

function storeData(data) {
  return {
    type: QUESTIONS_ITEM_STORE,
    payload: data
  };
}

export function getQuestionFromServer(questionId) {
  return (dispatch, getState) => {
    return fetch(`${apiURL}/question/${questionId}`).then((response) => (response.json()))
    .then((response) => {
      console.log(response);
      return dispatch(storeData({
        question: response.data
      }));
    }).catch((error) => {
      console.error(`Get Question :: ${error.message}`);
    });
  };
}

export function openAnswerInput() {
  return storeData({
    isAnswerInputOpened: true
  });
}

export function closeAnswerInput() {
  return storeData({
    isAnswerInputOpened: false
  });
}

export function setAnswerText(value) {
  return storeData({
    answerInputText: value
  });
}

export function sendAnswer(questionId) {
  return (dispatch, getState) => {
    const body = {
      userId: 5,
      questionId: questionId,
      answer: getState().question.answerInputText
    };

    return fetch(`${apiURL}/question/answer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((response) => (response.json()))
    .then((response) => {
      dispatch(closeAnswerInput());
      return dispatch(getQuestionFromServer(questionId));
    }).catch((error) => {
      console.error(`Send Answer :: ${error.message}`);
    });
  };
}
