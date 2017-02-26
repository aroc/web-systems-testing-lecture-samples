let Datastore = require('nedb');
let db = new Datastore({ filename: '../db/datafile', autoload: true });
module.exports = db;
