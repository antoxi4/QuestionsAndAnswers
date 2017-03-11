'use strict';

module.exports = {
  createQuestion(questionTitle = '', questionNotes = '', userId = '') {
    return Question.create({
      title: questionTitle,
      notes: questionNotes,
      owner: userId
    });
  },

  getQuestionById(questionId = '') {
    return Question.findOne({where: {
      id: questionId
    }}).populateAll();
  },

  getQuestions() {
    return Question.find({}).populateAll();
  }
};
