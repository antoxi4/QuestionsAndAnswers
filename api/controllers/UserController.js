'use strict';

module.exports = {
  create(req, res) {
    const userName = req.body.userName || null;

    if (!userName) {
      res.json({
        status: 'error',
        errorMessage: 'User Name undefined'
      });
      return null;
    }

    return UserService.getUserByName(userName).then((userResult) => {
      if (userResult) {
        throw new Error('A user with this name already exists');
      }

      return UserService.createUser(userName);
    }).then((createResult) => {
      res.json({
        status: 'ok',
        data: createResult
      });
    }).catch((error) => {
      sails.log.error(`Create User Controller :: ${error.message}`);
      res.json({
        status: 'error',
        errorMessage: error.message
      });
    });
  },

  findOne(req, res) {
    const userName = req.param('userName');

    if (!userName) {
      res.json({
        status: 'error',
        errorMessage: 'User Name undefined'
      });
      return null;
    }

    return UserService.getUserByName(userName).then((userResult) => {
      if (userResult) {
        res.json({
          status: 'ok',
          data: userResult
        });

        return null;
      }

      throw new Error('User with this name does not exist');
    }).catch((error) => {
      sails.log.error(`Find User Controller :: ${error.message}`);
      res.json({
        status: 'error',
        errorMessage: error.message
      });
    });
  }
};
