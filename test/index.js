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

after(function (done) {
    console.log('通った。これからも頑張って行こうな╭( ･ㅂ･)و ̑̑');
    done();
});
