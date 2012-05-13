var async = require('utile').async,
<<<<<<< HEAD
    resourceful = require('resourceful'),
=======
    resourceful = require('../lib/resourceful-mongo'),
>>>>>>> 50ca669151fcfded7fd1ec4bec42a4b56a4517fa
    mongodb = require('mongodb').Db,
    Server = require('mongodb').Server;

resourceful.env = 'test';

<<<<<<< HEAD
var testConnection = {
  host: "127.0.0.1", 
  port : 27017, 
  database : "resourceful-mongo-test", 
  collection : "test",
  safe : true
}

var DB = exports;

DB.start = function(callback) {
  // drop the test database
  var testDB = new mongodb(testConnection.database, new Server(testConnection.host, testConnection.port, {}));
  testDB.open(function(err, db) {
    db.dropDatabase(callback);
  });

  // setup default resourceful connection
  resourceful.use("mongodb", testConnection);
};

=======
var DB = exports;

>>>>>>> 50ca669151fcfded7fd1ec4bec42a4b56a4517fa
DB.people = {
  "bob"   : {name: 'Bob', age: 21},
  "steve" : {name: 'Steve', age: 32},
  "joe"   : {name: 'Joe', age: 43}
};

DB.Person = resourceful.define('person', function() {
<<<<<<< HEAD
=======

  this.use("mongodb", {
    uri: "mongodb://127.0.0.1:27017/resourceful-mongo-test",
    collection: "people",
    safe: true
  });

>>>>>>> 50ca669151fcfded7fd1ec4bec42a4b56a4517fa
  this.string('name');
  this.number('age');
});

DB.createPeople = function(people, callback) {
  if(!Array.isArray(people)) people = [people];

  async.forEach(people, DB.createPerson, callback);
};

DB.createPerson = function(person, callback) {
  DB.Person.create(person, callback);
<<<<<<< HEAD
};
=======
};

DB.drop = function(callback) {

  this.timeout(10000); //The tests are a bit slow because the database is dropped before each one.

  if (!DB.Person.connection.connection) return callback();

  DB.Person.connection.connection.dropDatabase(function(err) {
    if (err) throw err;
    callback();
  });
};
>>>>>>> 50ca669151fcfded7fd1ec4bec42a4b56a4517fa
