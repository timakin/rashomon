var should = require('should'),
    assert = require('assert'),
    parsedApp = require('./resources/parsedApp'),
    Rashomon = require("../index"),
    path = require('path'),
    appjsPath = path.join(__dirname, 'resources/app.js');

describe('Rashomon', function () {
    describe('testYo', function () {
        it('First Test', function () {
            assert.equal(Rashomon.testYo(), 'Yo!') ;
        });
    });

    describe('parseCode', function () {
        it('Test for parsing code', function () {
            assert.equal(Rashomon.parseCode(appjsPath), parsedApp.parseResult()) ;
        });
    });

});

before(function (done) {
    console.log('やったるぜ╭( ･ㅂ･)و ̑̑');
    done();
});


after(function (done) {
    console.log('これからも頑張って行こうな╭( ･ㅂ･)و ̑̑');
    done();
});
