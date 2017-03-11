'use strict';

module.exports = {
  createUser(userName = '') {
    return User.create({name: userName});
  },

  getUserByName(userName = '') {
    return User.findOne({where: {
      name: userName
    }});
  },

  getUserById(userId = '') {
    return User.findOne({where: {
      id: userId
    }});
  }
};
