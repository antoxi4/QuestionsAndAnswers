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
