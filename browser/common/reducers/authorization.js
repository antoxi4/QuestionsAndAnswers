'use strict';

import { AuthorizationInitialState } from './initialStates';
import { AUTHORIZATION_STORE } from '../actions/actionTypes';

export default function authorization(state = AuthorizationInitialState, action) {

  if (action.type === AUTHORIZATION_STORE) {
    return {
      ...state,
      ...action.payload
    };
  }

  return state;
};
