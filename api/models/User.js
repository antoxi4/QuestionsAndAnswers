module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: false
    },

    questions: {
      collection: 'question',
      via: 'owner'
    }
  }
};
