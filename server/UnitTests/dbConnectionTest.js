'use strict';

require('mocha');
var assert = require('assert');
var dbConnect = require('../DatabaseConnection/dbConnect.js');

describe('dprp_projekt_server', function() {
  it('should export a function', function() {
    assert.equal(typeof dbConnect, 'function');
  });

  it('should export an object', function() {
    assert(dbConnect);
    assert.equal(typeof dbConnect, 'object');
  });

  it('should throw an error when invalid args are passed', function() {
    assert.throws(function() {
      dbConnect();
    });
  });

});

