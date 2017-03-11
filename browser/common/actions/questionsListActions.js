'use strict';

import { QUESTIONS_LIST_STORE } from './actionTypes';
import Constants from '../constants';

const apiURL = Constants.apiURL;

function storeData(data) {
  return {
    type: QUESTIONS_LIST_STORE,
    payload: data
  };
}

export function getQuestionsFromServer() {
  return (dispatch, getState) => {
    return fetch(`${apiURL}/question`).then((response) => (response.json()))
    .then((response) => {
      return dispatch(storeData({
        questions: response.data
      }));
    }).catch((error) => {
      console.error(`Get Questions :: ${error.message}`);
    });
  };
}
