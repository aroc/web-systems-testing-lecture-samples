'use strict';

let assert = require('chai').assert;
let User = require('../../app/user');
let db = require('../../app/db');

describe('User: Integration Tests', function() {

  // Make sure to remove all documents from the database before running each
  // test, otherwise you'll have data leftover from previous tests.

  afterEach(function(done){
    db.remove({}, { multi: true }, (err, numRemoved) => {
      done(err);
    });
  });

  describe('#save()', function() {

    // Example of using mochas "done" callback to handle async functions.

    it('should save the user to the database', function(done) {
      let user = new User('Eric');
      user.save(function(){
        db.findOne({ name: 'Eric' }, function(err, doc) {
          if (err) {
            done(err);
            return;
          }
          assert.isNotNull(doc);
          assert.strictEqual('Eric', doc.name);
          done();
        });
      });
    });

    it('should update an existing user', function(done) {
      let user = new User('Eric');
      user.save(function(){
        user.setName('Jim');
        user.save(() => {
          db.findOne({ '_id': user.id }, (err, doc) => {
            if (err) {
              done(err);
              return;
            }
            assert.strictEqual('Jim', doc.name);
            done();
          });
        });
      });
    });

  });

});
