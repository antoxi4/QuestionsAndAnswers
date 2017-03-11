'use strict';

module.exports = {
  createQuestion(questionTitle = '', questionNotes = '', userId = '') {
    return Question.create({
      title: questionTitle,
      notes: questionNotes,
      owner: userId
    });
  },

  getQuestionByUser(userName = '') {
    return User.findOne({where: {
      name: userName
    }});
  },

  getQuestions() {
    return Question.find({}).populateAll();
  }
};
