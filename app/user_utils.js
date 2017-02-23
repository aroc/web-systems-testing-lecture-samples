'use strict ';

let User = require('./user');

let utils = {

  // Bad function

  signupUser: function (name) {
    let sendUserWelcomeEmail = function (user) {
      // do stuff
    }

    let user = new User(name);
    user.save();
  },

  // Better function

  signupUser: function () {

  },

  sendUserWelcomeEmail: function (user) {
    // do stuff
  },

  loginUser: function (user) {
    // do stuff
  },

  createUsersFirstProject (user) {
    // do stuff
  }

};

module.exports = utils;
