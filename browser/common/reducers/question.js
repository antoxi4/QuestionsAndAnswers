'use strict';

import { QuestionInitialState } from './initialStates';
import { QUESTIONS_ITEM_STORE } from '../actions/actionTypes';

export default function question(state = QuestionInitialState, action) {
  if (action.type === QUESTIONS_ITEM_STORE) {
    return {
      ...state,
      ...action.payload
    };
  }

  return state;
};
