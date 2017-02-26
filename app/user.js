'use strict';

let db = require('./db');

function User (name) {
  this.id = null;
  this.name = name;
}

User.prototype.getName = function () {
  return this.name;
}

User.prototype.setName = function (newName) {
  this.name = newName;
}

User.prototype.getAttributes = function () {
  return {
    name: this.name
  };
}

User.prototype.setAttributes = function (doc) {
  this.id = doc._id;
  this.name = doc.name;
}

User.prototype.find = function (callback) {
  db.findOne({ '_id': this.id }, (err, newDoc) => {
    if (err) {
      callback(err);
      return;
    }
    if (newDoc === null) {
      callback(new Error(`Cannot find user with id of ${this.id}`));
      return;
    }
    this.setAttributes(newDoc);
    callback(null, this);
  });
}

User.prototype.save = function (callback) {
  if (!this.id) {
    db.insert(this.getAttributes(), (err, newDoc) => {
      if (err) {
        callback(err);
        return;
      }
      this.id = newDoc._id
      if (callback) callback(null, this);
    });
  } else {
    db.update({ '_id': this.id }, this.getAttributes(), (err, newDoc) => {
      if (err) throw new Error(`Error updating user with id of ${this.id}`);
      if (callback) callback(null, this);
    });
  }
}

module.exports = User;
