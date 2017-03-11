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

export function getQuestionsFromServer(getURL = null) {
  return (dispatch, getState) => {
    const requestURL = getURL ? getURL : getState().dashboard.getURL;
    return fetch(`${apiURL}/${requestURL}`).then((response) => (response.json()))
    .then((response) => {
      return dispatch(storeData({
        questions: response.data
      }));
    }).catch((error) => {
      console.error(`Get Questions :: ${error.message}`);
    });
  };
}
