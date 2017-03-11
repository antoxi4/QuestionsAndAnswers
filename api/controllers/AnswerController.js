'use strict';

module.exports = {
  create(req, res) {
    const userId = req.body.userId || null;
    const questionId = req.body.questionId || null;
    const answer = req.body.answer || null;

    return UserService.getUserById(userId).then((userResult) => {
      if (!userResult) {
        throw new Error('User does not exist');
      }

      return AnswerService.createAnswer(answer, userResult.name, questionId);
    }).then((answerResult) => {
      if (!answerResult) {
        throw new Error('Answer not created');
      }

      res.json({
        status: 'ok',
        data: answerResult
      });
    }).catch((error) => {
      sails.log.error(`Create Answer Controller :: ${error.message}`);
      res.json({
        status: 'error',
        errorMessage: error.message
      });
    });
  }
};
