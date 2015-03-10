var should = require('should'),
    assert = require('assert'),
    parsedApp = require('./resources/parsedApp'),
    Rashomon = require("../index");

describe('Rashomon', function () {
    describe('testYo', function () {
        it('First Test', function () {
            assert.equal(Rashomon.testYo(), 'Yo!') ;
        });
    });

    describe('parseCode', function () {
        it('Test for parsing code', function () {
            assert.equal(Rashomon.parseCode('./resources/app.js'), parsedApp.parseResult()) ;
        });
    });

});

before(function (done) {
    console.log('やったるぜ╭( ･ㅂ･)و ̑̑');
    console.log(Rashomon.parseCode('./resources/app.js'));
    done();
});


after(function (done) {
    console.log('通った。これからも頑張って行こうな╭( ･ㅂ･)و ̑̑');
    done();
});
