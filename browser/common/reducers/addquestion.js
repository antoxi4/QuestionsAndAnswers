'use strict';

import { AddQuestionInitialState } from './initialStates';
import { ADD_QUESTION_STORE } from '../actions/actionTypes';

export default function addquestion(state = AddQuestionInitialState, action) {

  if (action.type === ADD_QUESTION_STORE) {
    return {
      ...state,
      ...action.payload
    };
  }

  return state;
};
