var should = require('should'),
    assert = require('assert'),
    Rashomon = require("../index");

describe('Rashomon', function () {
    describe('testYo', function () {
        it('First Test', function () {
            assert.equal(Rashomon.testYo(), 'Yo!') ;
        });
    });
});