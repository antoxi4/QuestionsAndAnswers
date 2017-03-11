'use strict';

import { DASHBOARD_STORE } from './actionTypes';
import { QuestionsListActions } from './index';

function storeData(data) {
  return {
    type: DASHBOARD_STORE,
    payload: data
  };
}

export function setActiveFilterId(filterData) {
  return (dispatch, getState) => {
    dispatch(QuestionsListActions.getQuestionsFromServer(filterData.getURL));
    return dispatch(storeData({
      activeFilterId: filterData.id,
      getURL: filterData.getURL
    }));
  };
}
