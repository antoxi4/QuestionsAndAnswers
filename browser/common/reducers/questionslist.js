'use strict';

import { QuestionsListInitialState } from './initialStates';
import { QUESTIONS_LIST_STORE } from '../actions/actionTypes';

export default function questionslist(state = QuestionsListInitialState, action) {
  if (action.type === QUESTIONS_LIST_STORE) {
    return {
      ...state,
      ...action.payload
    };
  }

  return state;
};
