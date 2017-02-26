'use strict';

let assert = require('chai').assert;
let User = require('../../app/user');
let db = require('../../app/db');

describe('User: Unit Tests', function() {

  beforeEach(function(){
    this.user = new User('Eric');
  });

  describe('#getName()', function() {

    it('should return the users name', function() {
      let user = new User('Eric');
      assert.strictEqual('Eric', user.getName());
    });

  });

  describe('#setName()', function() {

    it('should set the name on the user', function() {
      this.user.setName('Alexa');
      assert.strictEqual('Alexa', this.user.getName());
    });

  });

});
