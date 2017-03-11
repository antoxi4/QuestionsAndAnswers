'use strict';

module.exports = {
  createAnswer(answer = '', userName = '', questionId = '') {
    return Answer.create({
      answer: answer,
      userName: userName,
      question: questionId
    });
  }
};
