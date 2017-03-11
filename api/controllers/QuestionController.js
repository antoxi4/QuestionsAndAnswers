'use strict';

module.exports = {
  find(req, res) {
    return QuestionService.getQuestions().then((questionsResult) => {
      res.json({
        status: 'ok',
        data: questionsResult
      });
    }).catch((error) => {
      sails.log.error(`Find Questions Controller :: ${error.message}`);
      res.json({
        status: 'error',
        errorMessage: error.message
      });
    });
  },

  findOne(req, res) {
    const questionId = req.param('questionId') || null;

    if (!questionId) {
      sails.log.error(`Get Question :: questionId is undefined`);
      res.json({
        status: 'error',
        errorMessage: 'questionId is undefined'
      });
      return null;
    }

    return QuestionService.getQuestionById(questionId)
    .then((questionResult) => {
      if (!questionResult) {
        throw new Error('Question dous exist');
      }

      res.json({
        status: 'ok',
        data: questionResult
      });
    }).catch((error) => {
      sails.log.error(`Get Question :: ${error.message}`);
      res.json({
        status: 'error',
        errorMessage: error.message
      });
    });
  },

  create(req, res) {
    const userId = req.body.userId || null;
    const questionTitle = req.body.questionTitle || null;
    const questionNotes = req.body.questionNotes || null;

    return QuestionService.createQuestion(questionTitle, questionNotes, userId)
    .then((questionResult) => {
      if (!questionResult) {
        throw new Error('Question not created');
      }

      res.json({
        status: 'ok',
        data: questionResult
      });
    }).catch((error) => {
      sails.log.error(`Create Question Controller :: ${error.message}`);
      res.json({
        status: 'error',
        errorMessage: error.message
      });
    });
  }
};
