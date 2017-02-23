'use strict';

let assert = require('assert');
let User = require('../../app/user');

describe('User', function() {

  describe('#getName()', function() {

    it('should return the users name', function() {
      let user = new User('Eric');
      assert.equal('Eric', user.getName());
    });

  });

  // describe('#setName()', function() {
  //
  //   it('should set the name on the user', function() {
  //     let user = new User('Eric');
  //     user.setName('Alexa');
  //     assert.equal('Alexa', user.getName());
  //   });
  //
  // });

});
