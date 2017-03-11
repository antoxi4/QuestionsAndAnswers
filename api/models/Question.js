module.exports = {
  attributes: {
    title: 'string',
    notes: 'string',
    owner: {
      model: 'user'
    },
    answers: {
      collection: 'answer',
      via: 'question'
    }
  }
};
