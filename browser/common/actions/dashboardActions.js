'use strict';

import { DASHBOARD_STORE } from './actionTypes';

function storeData(data) {
  return {
    type: DASHBOARD_STORE,
    payload: data
  };
}

export function setActiveFilterId(filterId) {
  return storeData({
    activeFilterId: filterId
  });
}
