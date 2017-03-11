'use strict';

import { DashBoardInitialState } from './initialStates';
import { DASHBOARD_STORE } from '../actions/actionTypes';

export default function dashboard(state = DashBoardInitialState, action) {
  if (action.type === DASHBOARD_STORE) {
    return {
      ...state,
      ...action.payload
    };
  }

  return state;
};
