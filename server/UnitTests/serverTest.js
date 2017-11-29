'use strict';

require('mocha');
var assert = require('assert');
var dprpProjektServer = require('..');

describe('dprp_projekt_server', function() {
  it('should export a function', function() {
    assert.equal(typeof dprpProjektServer, 'function');
  });

  it('should export an object', function() {
    assert(dprpProjektServer);
    assert.equal(typeof dprpProjektServer, 'object');
  });

  it('should throw an error when invalid args are passed', function() {
    assert.throws(function() {
      dprpProjektServer();
    });
  });

});