'use strict';

import { ADD_QUESTION_STORE } from './actionTypes';

function storeData(data) {
  return {
    type: ADD_QUESTION_STORE,
    payload: data
  };
}

export function setQuestionTitle(title) {
  return storeData({
    questionTitle: title
  });
}

export function setQuestionText(text) {
  return storeData({
    questionText: text
  });
}
