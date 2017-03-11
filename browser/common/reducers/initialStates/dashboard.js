'use strict';

const filtersList = [
  {id: 0, title: 'All', getURL: 'question'},
  {id: 1, title: 'Answered', getURL: 'question/answered'},
  {id: 2, title: 'Not Answered', getURL: 'question/nonanswered'},
];

export default {
  filters: filtersList,
  activeFilterId: filtersList[0].id,
  getURL: filtersList[0].getURL
};
